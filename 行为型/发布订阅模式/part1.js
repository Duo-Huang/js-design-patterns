export default class Event {
    static maxHistoryMsg = 100;

    static maxSubscriber = 50;

    topics = {};

    subUid = -1;

    history = {};

    /**
     * @param {string} topic
     * @param {Function} handler
     * @param {boolean} receiveHistoryMsg Support for receiving historical messages, default false
     * @returns {string|false}
     */
    subscribe(topic, handler, receiveHistoryMsg) {
        if (receiveHistoryMsg && this.history[topic]) {
            this.history[topic].forEach((msg) => {
                handler(msg);
            });
        }
        return this.registerSubscriber(topic, handler);
    }

    /**
     * @param {string} token
     * @returns {string}
     */
    unsubscribe(token) {
        for (const m in this.topics) {
            if (this.topics[m]) {
                for (let i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i].token === token) {
                        this.topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return '';
    }

    /**
     * @param {string} topic
     * @param {any} args
     * @returns {boolean}
     */
    publish(topic, args) {
        this.saveToHistory(topic, args);
        if (!(this.topics[topic] && this.topics[topic].length > 0)) {
            return false;
        }
        
        this.topics[topic].forEach((item) => {
            item.handler(args);
        });
        return true;
    }

    registerSubscriber(topic, handler) {
        const token = (++this.subUid).toString();
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        if (this.topics[topic].length >= Event.maxSubscriber) {
            console.warn(
                `Event: The maximum number of subscriptions for this topic "${topic}" is ${Event.maxSubscriber}`,
            );
            return false;
        }
        this.topics[topic].push({
            token,
            handler,
        });
        return token;
    }

    saveToHistory(topic, msg) {
        if (!this.history[topic]) {
            this.history[topic] = [];
        }
        const list = this.history[topic];
        if (list.length < Event.maxHistoryMsg) {
            list.push(msg || undefined);
            return false;
        }
        list.shift();
        list.push(msg || undefined);
        return true;
    }
}

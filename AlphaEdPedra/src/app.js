const Services = require("./Services/index.js");

class App {
    #app;

    init(db) {
        this.#app = new Services(db);
        return this.#app;
    }
}

module.exports = App;
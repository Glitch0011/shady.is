import ShadyElement from "/node_modules/shady/shady.js"

export default class UpperElement extends ShadyElement {
    get Upper() {
        return this.Data.Text.toUpperCase();
    }
}

ShadyElement.Register(UpperElement);

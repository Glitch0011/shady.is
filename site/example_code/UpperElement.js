import ShadyElement from  "../../node_modules/shady-components/dist/shady.js"

export class UpperElement extends ShadyElement {

    get Upper() {
        return this.Data.Text.toUpperCase();
    }
}

ShadyElement.Register(UpperElement);
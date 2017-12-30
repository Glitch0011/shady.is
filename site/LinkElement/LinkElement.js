import ShadyElement from "/node_modules/shady-components/shady.js"

export default class LinkElement extends ShadyElement {
    get Text() {
        return /.\/.*\/(.*)\/index.html/.exec(this.Data.Target)[1];
    }
}

ShadyElement.Register(LinkElement);

import ShadyElement from  "./../../../../node_modules/shady-components/dist/shady.js"

export default class ClickableElement extends ShadyElement {

    onClick(e) {
        this.Data.Checked = !this.Data.Checked;
    }
}

ShadyElement.Register(ClickableElement, { css: true });
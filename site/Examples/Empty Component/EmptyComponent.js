import ShadyElement from  "./../../../../node_modules/shady-components/dist/shady.js"

export class EmptyElement extends ShadyElement {
    connectedCallback() {
        super.connectedCallback();

        alert("Hello, World!");
    }
}

ShadyElement.Register(EmptyElement, { html: false } );
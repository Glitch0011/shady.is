import ShadyElement from "/node_modules/shady-components/shady.js"

export class FlippingElement extends ShadyElement {

    get Class() {
        return this.Data.Enabled ? "on" : "off";
    }
    
    connectedCallback() {
        super.connectedCallback();

        setInterval(() => {
            this.Data.Enabled = !this.Data.Enabled;
        }, 1000);
    }
}

ShadyElement.Register(FlippingElement);
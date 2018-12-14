import ShadyElement from "/node_modules/shady-components/shady.js"

export default class UpdatingTextElement extends ShadyElement {

    connectedCallback() {

        super.connectedCallback();

        setInterval(() =>
        {
            this.Data.Text = (parseInt(this.Data.Text) + 1).toString();
        }, this.Data.Interval);
    }
}

ShadyElement.Register(UpdatingTextElement);

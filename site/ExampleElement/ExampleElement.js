import ShadyElement from "/node_modules/shady-components/shady.js"

import "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"

export default class ExampleElement extends ShadyElement {
    
    escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
     }

    get Code() {
        return fetch(this.Data.CodeFile).then(i=>{
            return i.text()
        })
    }

    get Html() {
        return fetch(this.Data.HtmlFile).then(i=>{
            return i.text().then(text => this.escapeHtml(text));
        })
    }

    get Usage() {
        return fetch(this.Data.UsageFile).then(i=>{
            return i.text().then(text => this.escapeHtml(text));
        })
    }

    afterRender() {
        super.afterRender()

        for (let elem of this.querySelectorAll("code"))
            hljs.highlightBlock(elem);
    }
}

ShadyElement.Register(ExampleElement, { css: true });

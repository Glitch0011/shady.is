import ShadyElement from "/node_modules/shady-components/shady.js"

export class InlineElement extends ShadyElement {

}

ShadyElement.Register(InlineElement);

InlineElement.inlineHTML = "<div><span>Hello, World!<span></div>"
InlineElement.inlineCSS = "div { padding: 10px; border: 1px solid black; }"
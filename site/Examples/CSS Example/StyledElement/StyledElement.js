import ShadyElement from "/node_modules/shady-components/shady.js"

export class StyledElement extends ShadyElement {

}

ShadyElement.Register(StyledElement, { css: true });
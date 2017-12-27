import ShadyElement from "/node_modules/shady/shady.js"
import ExampleElement from "../ExampleElement/ExampleElement.js"
import TitleElement from "../TitleElement/TitleElement.js"

import UpperElement from "../ExampleElements/To Upper/UpperElement.js"

export class MainElement extends ShadyElement {
    
}

ShadyElement.Register(MainElement, { css: true } );

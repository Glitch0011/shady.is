import ShadyElement from  "./node_modules/shady-components/dist/shady.js"

import ExampleElement from "../ExampleElement/ExampleElement.js"
import TitleElement from "../TitleElement/TitleElement.js"
import LinkElement from "../LinkElement/LinkElement.js"

import UpperElement from "../Examples/To Upper/UpperElement.js"
import UpdatingTextElement from "./../Examples/Updating Text/UpdatingTextElement/UpdatingTextElement.js"
import ClickableElement from "./../Examples/Bound Events/ClickableElement/ClickableElement.js"

export class MainElement extends ShadyElement {
    onTabClick(e) {
        console.log(e);
    }

    toggleCollapse(e) {
        let container = e.currentTarget.parentElement;

        let target = container.querySelector(".collapsable");

        target.classList.toggle("collapsed");
    }
}

ShadyElement.Register(MainElement, { css: true } );

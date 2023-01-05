import {Element} from "../common/dom.js";
import Template from '../templates/title.js';

class Title extends Element {
    constructor(title, description) {
        const dom = Template(title, description)
        super(dom);
        this._render()
    }
}

export { Title }
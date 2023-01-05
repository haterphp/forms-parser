import DefaultLayout from './common/index.js'
import {makeInputProps} from "./functions/make-props.js";
const template = (label, attrs) => {

    return DefaultLayout(label, `
        <input class="border border-slate-300 px-3 py-2 rounded-md outline-0 w-full max-w-[350px]" 
            ${makeInputProps({ ...attrs })}>
    `)
}
export default template
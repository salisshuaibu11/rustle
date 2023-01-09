/* Counter.svelte generated by Rustle 0.1.5 */
import {
    noop,
    SvelteComponent,
    detach,
    element,
    insert,
    text,
    append,
} from "svelte/internal"


function create_fragment(ctx) {
    let count;
    let button_1;
    let h1_3;
    let txt_4;
    let button_5;

    return {
        c() {
                        count = props.count;
            button_1 = element('button');
            button_1.addEventListener('click', increment);
            button_1.textContent += "Increment";
            h1_3 = element('h1');
            txt_4 = text(/* count */ ctx[0]);
            button_5 = element('button');
            button_5.addEventListener('click', decrement);
            button_5.textContent += "Decrement";
        },
        m(target, anchor) {
            insert(target, button_1, anchor);
            insert(target, h1_3, anchor);
            append(h1_3, txt_4);
            insert(target, button_5, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d(detaching) {
            if (detaching) detach(button_1);
            button_1.removeEventListener('click', increment);
            if (detaching) detach(h1_3);
            if (detaching) detach(button_5);
            button_5.removeEventListener('click', decrement);
        }
    };
}



class Counter extends SvelteComponent {
    constructor(options) {
        super();
        init(this, options, null, create_fragment, safe_not_equal, {});
    }
}

export default Counter

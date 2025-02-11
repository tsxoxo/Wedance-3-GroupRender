import { h } from "vue"

export default {
    setup(props, { slots }) {
        // Goal: Render all the elements passed via slots with custom classes
        //
        // possibly use smth like this:
        // Array.from({ length: 20 }).map(() => {
        //   return h('p', 'hi')
        // })
        //
        // Attributes:
        // h('div', { class: 'bar', innerHTML: 'hello' })
        //
        // START HERE
        // Big question:
        // How to add/replace classes on the slots.default...
        // ... a recursive h()?
        return () =>
            h(
                "div",
                { class: "border rounded-lg flex divide-x" },
                props,
                slots.default()
            )
    },
}

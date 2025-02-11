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
        return () => h("div", { class: "bg-red-500" }, props, slots.default())
    },
}

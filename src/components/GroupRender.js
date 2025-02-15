import { cloneVNode, h } from "vue"

function tweakClass({ el }) {
    el.classList.remove("border", "rounded-lg")
}

export default {
    setup(props, { slots }) {
        return () =>
            h(
                "div",
                { class: "border rounded-lg flex divide-x" },
                props,
                slots.default()?.map(component =>
                    h(
                        cloneVNode(component, {
                            onVnodeMounted: tweakClass,
                            onVnodeUpdated: tweakClass,
                        })
                    )
                )
            )
    },
}

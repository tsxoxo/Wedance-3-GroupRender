import { mount } from "@vue/test-utils"
import { test } from "vitest"
import GroupRender from "./GroupRender.js"
import Tbutton from "./TButton.vue"

test("Slot-children are being rendered and class attribute is being correctly modified", () => {
    const wrapper = mount(GroupRender, {
        slots: {
            default: [Tbutton, Tbutton],
        },
    })
    // 2 <button> elements are being rendered
    expect(wrapper.findAll("button").length).toBe(2)
    // They have the classes specified in the criteria
    expect(wrapper.findAll("button")[0].attributes().class).toBe(
        "px-4 py-2 hover:bg-gray-100"
    )
    expect(wrapper.findAll("button")[0].attributes().class).toBe(
        "px-4 py-2 hover:bg-gray-100"
    )
})

import { mount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
    it("renders a profile link", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: false,
                };
            },
        });

        const profileLink = wrapper.get("#profile")

        expect(profileLink.exists()).toEqual("My Profile");
    });

    it("should not render a profile link", () => {
        const wrapper = mount(Nav, {
            data() {
                return {
                    isLoggedIn: false,
                };
            },
        });

        const profileLink = wrapper.find("#profile");

        expect(profileLink.exists()).toBeTruthy(false);
    });
});

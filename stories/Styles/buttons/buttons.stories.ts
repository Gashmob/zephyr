/**
 * MIT License
 *
 * Copyright (c) 2025-Present Kevin Traini
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { COMMON_COLORS, CommonColor, sky_700 } from "../../../src";

type ButtonProps = {
    content: string;
    color: CommonColor | "";
}

const meta: Meta<ButtonProps> = {
    title: "Styles/Buttons",
    args: {
        content: "Button",
        color: sky_700,
    },
    argTypes: {
        content: {
            name: "Content",
            description: "Text in the button",
            type: "string",
            control: "text",
        },
        color: {
            name: "Color",
            description: "Color of the badge",
            type: "string",
            control: "select",
            options: ["", ...COMMON_COLORS],
        },
    },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const ButtonsStory: Story = {
    render: (args: ButtonProps) => html`
        <div class="zr-layout-flex-column zr-layout-flex-gap-large">
            <div>
                <h6>Classic buttons</h6>
                <div class="zr-layout-flex">
                    <button class="zr-button zr-button-large zr-button-${args.color}">${args.content}</button>
                    <button class="zr-button zr-button-normal zr-button-${args.color}">${args.content}</button>
                    <button class="zr-button zr-button-small zr-button-${args.color}">${args.content}</button>
                    <button class="zr-button zr-button-mini zr-button-${args.color}">${args.content}</button>
                </div>
            </div>
            <div>
                <h6>Rounded buttons</h6>
                <div class="zr-layout-flex">
                    <button class="zr-button zr-button-large zr-button-rounded zr-button-${args.color}">${args.content}
                    </button>
                    <button class="zr-button zr-button-normal zr-button-rounded zr-button-${args.color}">${args.content}
                    </button>
                    <button class="zr-button zr-button-small zr-button-rounded zr-button-${args.color}">${args.content}
                    </button>
                </div>
            </div>
            <div>
                <h6>Disabled buttons</h6>
                <div class="zr-layout-flex">
                    <button class="zr-button zr-button-large zr-button-${args.color}" disabled>${args.content}
                    </button>
                    <button class="zr-button zr-button-normal zr-button-${args.color}" disabled>${args.content}
                    </button>
                    <button class="zr-button zr-button-small zr-button-${args.color}" disabled>${args.content}
                    </button>
                    <button class="zr-button zr-button-mini zr-button-${args.color}" disabled>${args.content}
                    </button>
                </div>
            </div>
            <div>
                <h6>Links</h6>
                <div class="zr-layout-flex">
                    <a href="#" class="zr-button zr-button-large zr-button-${args.color}">${args.content}</a>
                    <a href="#" class="zr-button zr-button-normal zr-button-${args.color}">${args.content}</a>
                    <a href="#" class="zr-button zr-button-small zr-button-${args.color}">${args.content}</a>
                    <a href="#" class="zr-button zr-button-mini zr-button-${args.color}">${args.content}</a>
                </div>
            </div>
        </div>
    `,
};

export const ButtonBarStory: Story = {
    render: (args: ButtonProps) => html`
        <div class="zr-layout-flex-column zr-layout-flex-gap-large">
            <div class="zr-button-bar">
                <button class="zr-button zr-button-${args.color}">Left</button>
                <button class="zr-button zr-button-${args.color}">Center</button>
                <button class="zr-button zr-button-${args.color}" disabled>Disabled</button>
                <button class="zr-button zr-button-${args.color}">Right</button>
            </div>
            <div class="zr-button-bar zr-button-bar-rounded">
                <button class="zr-button zr-button-${args.color}">Left</button>
                <button class="zr-button zr-button-${args.color}">Center</button>
                <button class="zr-button zr-button-${args.color}" disabled>Disabled</button>
                <button class="zr-button zr-button-${args.color}">Right</button>
            </div>
        </div>
    `,
};

export const SwitchStory: Story = {
    render: () => html`Not implemented yet`,
};

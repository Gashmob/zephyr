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

const meta: Meta = {
    title: "Styles/Layout",
    parameters: {
        layout: "padded",
    },
};
export default meta;

type Story = StoryObj;

export const ShowcaseStory: Story = {
    render: () => html`
        <div class="zr-layout-flex-column zr-layout-flex-gap-extra-large zr-layout-full-width zr-layout-center-row">
            <div class="zr-pane zr-layout-full-width">
                <h1 class="zr-pane-title">Top section</h1>
            </div>
            <div class="zr-layout-flex zr-layout-flex-gap-large">
                <div class="zr-layout-width-1/5 zr-layout-full-height zr-pane">
                    <h1 class="zr-pane-title">Left</h1>
                </div>
                <div class="zr-layout-width-3/5 zr-pane">
                    <h1 class="zr-pane-title">Body</h1>
                    <div class="zr-pane-section">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at facilisis neque, vel rhoncus
                        diam. Phasellus et arcu a enim sodales sollicitudin. Mauris feugiat venenatis fringilla.
                        Pellentesque eget velit a magna condimentum aliquam. Sed egestas vel nibh nec tincidunt. Sed
                        velit odio, tincidunt ac porta sed, gravida in nibh. Donec eu arcu felis. Sed viverra est in
                        bibendum volutpat. In interdum mauris justo, efficitur vulputate nisl molestie nec. Morbi
                        consequat sapien sed ex vulputate consequat. Nullam id iaculis dui, vitae semper magna.
                    </div>
                </div>
                <div class="zr-layout-width-1/5 zr-pane">
                    <h1 class="zr-pane-title">Right</h1>
                </div>
            </div>
            <div class="zr-pane zr-layout-width-4/5">
                <h1 class="zr-pane-title">Bottom section</h1>
            </div>
        </div>
    `,
};

export const WidthsStory: Story = {
    render: () => html`
        <div class="zr-layout-flex-column width-story">
            <div class="zr-layout-width-1/5"><code>zr-layout-width-1/5</code></div>
            <div class="zr-layout-width-1/4"><code>zr-layout-width-1/4</code></div>
            <div class="zr-layout-width-1/3"><code>zr-layout-width-1/3</code></div>
            <div class="zr-layout-width-2/5"><code>zr-layout-width-2/5</code></div>
            <div class="zr-layout-width-1/2"><code>zr-layout-width-1/2</code></div>
            <div class="zr-layout-width-3/5"><code>zr-layout-width-3/5</code></div>
            <div class="zr-layout-width-2/3"><code>zr-layout-width-2/3</code></div>
            <div class="zr-layout-width-3/4"><code>zr-layout-width-3/4</code></div>
            <div class="zr-layout-width-4/5"><code>zr-layout-width-4/5</code></div>
            <div class="zr-layout-full-width"><code>zr-layout-full-width</code></div>
        </div>
    `,
};

type CenterProps = {
    center: "" | "zr-layout-center" | "zr-layout-center-row" | "zr-layout-center-column";
};

export const CenterStory: StoryObj<CenterProps> = {
    args: {
        center: "",
    },
    argTypes: {
        center: {
            name: "Center",
            description: "How to center the element",
            control: "select",
            options: ["", "zr-layout-center", "zr-layout-center-row", "zr-layout-center-column"],
        },
    },
    render: (args: CenterProps) => html`
        <div class="center-story zr-layout-flex ${args.center}">
            <div>Content</div>
        </div>
    `,
};

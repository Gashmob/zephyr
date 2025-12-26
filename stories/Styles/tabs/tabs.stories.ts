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
    title: "Styles/Tabs",
};
export default meta;

type Story = StoryObj;

export const TabsStory: Story = {
    render: () => html`
        <div class="zr-tabs">
            <a href="https://example.com">This is a link</a>
            <button>This is a button</button>
            <a href="#" class="zr-tab-active"> Current tab</a>
            <a href="#" class="zr-tab-disabled">I'm disabled</a>
            <a href="#" class="zr-tab-info">Info</a>
            <a href="#" class="zr-tab-success">Success</a>
            <a href="#" class="zr-tab-warning">Warning</a>
            <a href="#" class="zr-tab-danger">Danger</a>
        </div>
    `,
};

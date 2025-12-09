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
    title: "Styles/Colors",
};
export default meta;

type Story = StoryObj;

export const MainColorsStory: Story = {
    render: () => html`
        <div class="zr-pane">
            <h1 class="zr-pane-title">Many color</h1>
            <div class="zr-pane-section">
                <table>
                    <thead>
                    <tr>
                        <th>Visual</th>
                        <th>Class name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><span class="doc-color doc-color-primary"></span></td>
                        <td><code>--zr-color-primary</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-secondary"></span></td>
                        <td><code>--zr-color-secondary</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-border"></span></td>
                        <td><code>--zr-color-border</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-font"></span></td>
                        <td><code>--zr-color-font</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-font-info"></span></td>
                        <td><code>--zr-color-font-info</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-font-success"></span></td>
                        <td><code>--zr-color-font-success</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-font-warning"></span></td>
                        <td><code>--zr-color-font-warning</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-font-danger"></span></td>
                        <td><code>--zr-color-font-danger</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-background-info"></span></td>
                        <td><code>--zr-color-background-info</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-background-success"></span></td>
                        <td><code>--zr-color-background-success</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-background-warning"></span></td>
                        <td><code>--zr-color-background-warning</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-background-danger"></span></td>
                        <td><code>--zr-color-background-danger</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-kbd-background"></span></td>
                        <td><code>--zr-color-kbd-background</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-kbd-font"></span></td>
                        <td><code>--zr-color-kbd-font</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-pane-background"></span></td>
                        <td><code>--zr-color-pane-background</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-pane-border"></span></td>
                        <td><code>--zr-color-pane-border</code></td>
                    </tr>
                    <tr>
                        <td><span class="doc-color doc-color-pane-shadow"></span></td>
                        <td><code>--zr-color-pane-shadow</code></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>`,
};

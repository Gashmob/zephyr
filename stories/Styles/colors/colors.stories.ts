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
                <td><span class="doc-color doc-color-info"></span></td>
                <td><code>--zr-color-info</code></td>
            </tr>
            <tr>
                <td><span class="doc-color doc-color-success"></span></td>
                <td><code>--zr-color-success</code></td>
            </tr>
            <tr>
                <td><span class="doc-color doc-color-warning"></span></td>
                <td><code>--zr-color-warning</code></td>
            </tr>
            <tr>
                <td><span class="doc-color doc-color-danger"></span></td>
                <td><code>--zr-color-danger</code></td>
            </tr>
            </tbody>
        </table>`,
};

export const OtherColorsStory: Story = {
    render: () => html`
        <table>
            <thead>
            <tr>
                <th>Visual</th>
                <th>Class name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><span class="doc-color doc-color-background"></span></td>
                <td><code>--zr-color-background</code></td>
            </tr>
            <tr>
                <td><span class="doc-color doc-color-background-secondary"></span></td>
                <td><code>--zr-color-background-secondary</code></td>
            </tr>
            </tbody>
        </table>`,
};

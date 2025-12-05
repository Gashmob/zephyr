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
    title: "Styles/Typography",
};
export default meta;

type Story = StoryObj;

export const TitleStory: Story = {
    render: () => html`
        <div>
            <h1>Level 1 heading</h1>
            <h2>Level 2 heading</h2>
            <h3>Level 3 heading</h3>
            <h4>Level 4 heading</h4>
            <h5>Level 5 heading</h5>
            <h6>Level 6 heading</h6>
        </div>`,
};

const cpp_code = "#include <iostream>\n" +
    "\n" +
    "int main() {\n" +
    '   std:cout << "Hello World!\\n";\n' +
    "}"
export const TextStory: Story = {
    render: () => html`
        <div>
            <p>This is some text with <em>emphasised words</em> but also <strong>strong words</strong>. You can also
                write <sub>sub</sub> or <sup>sup</sup>. And sometimes you can even write <code>code</code>.</p>
            <blockquote>
                Citation are important, many person said many things
            </blockquote>
            <ul>
                <li>Here</li>
                <li>is some</li>
                <ul>
                    <li>bullet list</li>
                </ul>
            </ul>
            <ol>
                <li>and also</li>
                <li>some</li>
                <ol>
                    <li>number list</li>
                </ol>
            </ol>
            <pre><code class="language-cpp">${cpp_code}</code></pre>
            <a href="https://example.com">https://example.com</a>
            <p>Press <kbd>Ctrl</kbd> + <kbd>P</kbd> to print the page</p>
            <p class="zr-text-info">For your information</p>
            <p class="zr-text-success">The result is successful</p>
            <p class="zr-text-warning">Warning</p>
            <p class="zr-text-danger">Danger</p>
        </div>`,
};

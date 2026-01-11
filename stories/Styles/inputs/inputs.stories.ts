/**
 * MIT License
 *
 * Copyright (c) 2026-Present Kevin Traini
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
    title: "Styles/Inputs",
    parameters: {
        layout: "padded",
    },
};
export default meta;

type Story = StoryObj;

export const InputsStory: Story = {
    render: () => html`
        <div class="zr-layout-flex zr-layout-center">
            <div class="zr-layout-flex-column zr-layout-width-1/2">
                <div class="zr-form-element">
                    <label class="zr-label" for="text-input">Text input</label>
                    <input class="zr-input" type="text" id="text-input"/>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="date-input">Date input</label>
                    <input class="zr-input" type="date" id="date-input"/>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label">
                        <input class="zr-input" type="checkbox" name="checkbox-input"/>Checkbox 1
                    </label>
                    <label class="zr-label">
                        <input class="zr-input" type="checkbox" name="checkbox-input"/>Checkbox 2
                    </label>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label">
                        <input class="zr-input" type="radio" name="radio-input"/>Choice 1
                    </label>
                    <label class="zr-label">
                        <input class="zr-input" type="radio" name="radio-input"/>Choice 2
                    </label>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="file-input">File input</label>
                    <input class="zr-input" type="file" id="file-input"/>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="number-input">Number input</label>
                    <input class="zr-input" type="number" id="number-input"/>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="password-input">Password input</label>
                    <input class="zr-input" type="password" id="password-input"/>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="range-input">Range input</label>
                    <input class="zr-input" type="range" id="range-input" min="0" max="100"/>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="color-input">
                        <input class="zr-input" type="color" id="color-input"/>Color input
                    </label>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="select-input">Select input</label>
                    <select class="zr-input" id="select-input">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="select-input">Multi select input</label>
                    <select class="zr-input" id="select-input" multiple>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div class="zr-form-element">
                    <label class="zr-label" for="textarea-input">Text area</label>
                    <textarea class="zr-input" id="textarea-input" rows="10"></textarea>
                </div>
            </div>
        </div>
    `,
};

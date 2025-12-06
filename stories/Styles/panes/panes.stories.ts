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
    title: "Styles/Panes",
};
export default meta;

type Story = StoryObj;

export const PanesStory: Story = {
    render: () => html`
        <div class="zr-pane">
            <h1 class="zr-pane-title">My pane title</h1>
            <section class="zr-pane-section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae diam eget enim placerat lacinia
                vel non metus. Pellentesque ultricies nibh eget dui tristique sollicitudin. Cras luctus rutrum rhoncus.
                In eget enim porta, pulvinar felis sit amet, mollis eros. Donec sed purus non mauris porttitor malesuada
                id vitae lectus. Integer interdum, ligula eget cursus congue, sapien est ullamcorper leo, ut suscipit
                velit neque ac magna. In sodales feugiat neque, at lobortis lacus. Quisque id tellus vel enim hendrerit
                mollis. Sed consectetur diam at justo semper molestie. Donec gravida ex dignissim purus lacinia, a
                rhoncus ante mattis. Morbi ac ex imperdiet, posuere tellus a, maximus ipsum. Fusce euismod vehicula
                nisi, sollicitudin ullamcorper metus porttitor non.
            </section>
        </div>
        <div class="zr-pane">
            <h1 class="zr-pane-title">A pane with multiple section</h1>
            <section class="zr-pane-section">
                <h2 class="zr-pane-section-title">First section title</h2>
                First section
            </section>
            <section class="zr-pane-section">
                <h2 class="zr-pane-section-title">Second section title</h2>
                Second section
            </section>
            <section class="zr-pane-section">
                Third section
            </section>
        </div>
        <div class="zr-pane">
            <h1 class="zr-pane-title">A pane with sections in row</h1>
            <section class="zr-pane-section">
                A section on the top
            </section>
            <div class="zr-pane-row">
                <section class="zr-pane-section">
                    A section on the left
                </section>
                <section class="zr-pane-section">
                    A section on the right
                </section>
            </div>
            <section class="zr-pane-section">
                A section on the bottom
            </section>
        </div>
    `,
};

export const CardsStory: Story = {
    render: () => html`TODO`,
};

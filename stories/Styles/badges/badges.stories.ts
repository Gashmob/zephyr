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
import { COMMON_COLORS, CommonColor, red_500 } from "../../../src/constants.ts";

type BadgeProps = {
    content: string;
    color: CommonColor;
}

const meta: Meta<BadgeProps> = {
    title: "Styles/Badges",
    args: {
        content: "Badge",
        color: red_500,
    },
    argTypes: {
        content: {
            name: "Content",
            description: "Text in the badge",
            type: "string",
            control: "text",
        },
        color: {
            name: "Color",
            description: "Color of the badge",
            type: "string",
            control: "select",
            options: COMMON_COLORS,
        },
    },
};
export default meta;

type Story = StoryObj<BadgeProps>;

export const BadgeStory: Story = {
    render: (args: BadgeProps) => html`
        <span class="zr-badge zr-badge-${args.color}">${args.content}</span>
    `,
};

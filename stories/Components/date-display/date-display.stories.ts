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
import {
    DISPLAY_TYPE_ONLY_ABSOLUTE,
    DisplayType,
    SECOND_POSITION_TOP,
    SecondPosition,
} from "../../../src/components/date-display/date-display.ts";
import "./DateDisplayWrapper.ts";

type DateDisplayProps = {
    date: string;
    timezone: string;
    with_time: boolean;
    display_type: DisplayType;
    second_position: SecondPosition;
    locale: string;
};

const meta: Meta<DateDisplayProps> = {
    title: "Components/Date display",
    args: {
        date: new Date(Date.now()).toISOString(),
        timezone: "UTC",
        with_time: false,
        display_type: DISPLAY_TYPE_ONLY_ABSOLUTE,
        second_position: SECOND_POSITION_TOP,
        locale: "en-US",
    },
    argTypes: {
        date: {
            name: "Date",
            description: "The date to display",
            type: "string",
            control: "date",
        },
        timezone: {
            name: "Timezone",
            description: "Timezone in which the date should be displayed",
            type: "string",
            control: "text",
        },
        with_time: {
            name: "With time?",
            description: "Should `hour:minute:second` be displayed?",
            type: "boolean",
            control: "boolean",
        },
        display_type: {
            name: "Display type",
            description: "How to display the date",
            type: "string",
            control: "select",
            options: ["relative-first", "absolute-first", "only-relative", "only-absolute"],
        },
        second_position: {
            if: { arg: "display_type", eq: "absolute-first" },
            name: "Second position",
            description: "Position of the second element",
            type: "string",
            control: "select",
            options: ["top", "right", "bottom", "left"],
        },
        locale: {
            name: "Locale",
            description: "In which language date should be displayed",
            type: "string",
            control: "text",
        },
    },
    render: (args: DateDisplayProps) => html`
        <date-display-wrapper
                .date="${args.date}"
                .timezone="${args.timezone}"
                .with_time="${args.with_time}"
                .display_type="${args.display_type}"
                .second_position="${args.second_position}"
                .locale="${args.locale}"
        ></date-display-wrapper>
    `,
};
export default meta;

type Story = StoryObj<DateDisplayProps>;

export const DateDisplayStory: Story = {};



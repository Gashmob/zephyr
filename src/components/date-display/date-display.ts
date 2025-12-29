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

import { define, html, UpdateFunction } from "hybrids";
import "./style.scss";

export const TAG = "zr-date-display";

export type DisplayType = "relative-first" | "absolute-first" | "only-relative" | "only-absolute";
export const DISPLAY_TYPE_RELATIVE_FIRST: DisplayType = "relative-first";
export const DISPLAY_TYPE_ABSOLUTE_FIRST: DisplayType = "absolute-first";
export const DISPLAY_TYPE_ONLY_RELATIVE: DisplayType = "only-relative";
export const DISPLAY_TYPE_ONLY_ABSOLUTE: DisplayType = "only-absolute";

export type SecondPosition = "top" | "right" | "bottom" | "left";
export const SECOND_POSITION_TOP: SecondPosition = "top";
export const SECOND_POSITION_RIGHT: SecondPosition = "right";
export const SECOND_POSITION_BOTTOM: SecondPosition = "bottom";
export const SECOND_POSITION_LEFT: SecondPosition = "left";

export type DateDisplay = {
    date: string;
    timezone: string;
    with_time: boolean;
    display_type: DisplayType;
    second_position: SecondPosition;
    locale: Intl.LocalesArgument;
};

type HostElement = DateDisplay & HTMLElement;

function formatAbsolute(host: HostElement): string {
    const formatter = Intl.DateTimeFormat(host.locale, {
        timeZone: host.timezone,
        dateStyle: "medium",
        timeStyle: host.with_time ? "medium" : undefined,
    });

    return formatter.format(new Date(host.date));
}

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

export function formatRelative(host: DateDisplay): string {
    const formatter = new Intl.RelativeTimeFormat(host.locale, { numeric: "auto" });

    const now = Date.now();
    const date = new Date(host.date).getTime();
    const sign = now >= date ? -1 : +1;
    let delta = Math.abs(now - date) / 1000;
    let unit: Intl.RelativeTimeFormatUnit;
    if (delta < MINUTE && host.with_time) {
        unit = "second";
    } else if (delta < HOUR && host.with_time) {
        delta /= 60;
        unit = "minute";
    } else if (delta < DAY && host.with_time) {
        delta /= 60 * 60;
        unit = "hour";
    } else if (delta < WEEK) {
        delta /= 60 * 60 * 24;
        unit = "day";
    } else if (delta < MONTH) {
        delta /= 60 * 60 * 24 * 7;
        unit = "week";
    } else if (delta < YEAR) {
        delta /= 60 * 60 * 24 * 30;
        unit = "month";
    } else {
        delta /= 60 * 60 * 24 * 365;
        unit = "year";
    }

    return formatter.format(sign * Math.round(delta), unit);
}

export const DateDisplayElement = define.compile<HostElement>({
    tag: TAG,
    date: "now",
    timezone: "Europe/Paris",
    with_time: true,
    display_type: DISPLAY_TYPE_ABSOLUTE_FIRST,
    second_position: SECOND_POSITION_RIGHT,
    locale: "fr-FR",
    render: (host: HostElement): UpdateFunction<HostElement> => {
        switch (host.display_type) {
            case DISPLAY_TYPE_ABSOLUTE_FIRST:
                return html`<span
                        data-info-content="${formatRelative(host)}"
                        data-info-position="${host.second_position}"
                >
                    ${formatAbsolute(host)}
                </span>`;
            case DISPLAY_TYPE_RELATIVE_FIRST:
                return html`<span
                        data-info-content="${formatAbsolute(host)}"
                        data-info-position="${host.second_position}"
                >
                    ${formatRelative(host)}
                </span>`;
            case DISPLAY_TYPE_ONLY_RELATIVE:
                return html`${formatRelative(host)}`;
            case DISPLAY_TYPE_ONLY_ABSOLUTE:
            default:
                return html`${formatAbsolute(host)}`;
        }
    },
});

if (!window.customElements.get(TAG)) {
    window.customElements.define(TAG, DateDisplayElement);
}

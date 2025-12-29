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

import { describe, expect, it, vi } from "vitest";
import "./date-display.ts";
import { DISPLAY_TYPE_ONLY_RELATIVE, formatRelative, SECOND_POSITION_RIGHT } from "./date-display.ts";

describe("date-display", async () => {
    it.each([
        ["2025-12-29 13:00:05", "in 5 seconds"],
        ["2025-12-29 12:59:55", "5 seconds ago"],
        ["2025-12-29 13:30:00", "in 30 minutes"],
        ["2025-12-29 12:25:00", "35 minutes ago"],
        ["2025-12-29 14:00:00", "in 1 hour"],
        ["2025-12-29 12:00:00", "1 hour ago"],
        ["2025-12-28 13:00:00", "yesterday"],
        ["2025-12-30 13:00:00", "tomorrow"],
        ["2025-11-29 13:00:00", "last month"],
        ["2026-01-29 13:00:00", "next month"],
        ["2024-12-29 13:00:00", "last year"],
        ["2026-12-29 13:00:00", "next year"],
        ["2004-07-14 05:45:16", "21 years ago"],
    ])(`Should display correct relative with date "%s"`, (date: string, expected: string) => {
        vi.setSystemTime("2025-12-29 13:00:00");

        expect(formatRelative({
            date: date,
            timezone: "UTC",
            with_time: true,
            display_type: DISPLAY_TYPE_ONLY_RELATIVE,
            second_position: SECOND_POSITION_RIGHT,
            locale: "en",
        })).toStrictEqual(expected);
    });
});

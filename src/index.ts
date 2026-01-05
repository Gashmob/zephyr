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

import "./components/date-display/date-display.ts";
import "./main.scss";

export * from "./constants.ts";
export {
    TAG,
    DISPLAY_TYPE_RELATIVE_FIRST,
    DISPLAY_TYPE_ABSOLUTE_FIRST,
    DISPLAY_TYPE_ONLY_RELATIVE,
    DISPLAY_TYPE_ONLY_ABSOLUTE,
    SECOND_POSITION_TOP,
    SECOND_POSITION_RIGHT,
    SECOND_POSITION_BOTTOM,
    SECOND_POSITION_LEFT,
    DateDisplayElement,
} from "./components/date-display/date-display.ts";
export type { DisplayType, SecondPosition, DateDisplay } from "./components/date-display/date-display.ts";


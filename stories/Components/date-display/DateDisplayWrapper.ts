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

import "../../../src/components/date-display/date-display.ts";
import {
    DateDisplayElement,
    DISPLAY_TYPE_ABSOLUTE_FIRST,
    DisplayType,
    SECOND_POSITION_RIGHT,
    SecondPosition,
    TAG,
} from "../../../src/components/date-display/date-display.ts";

class DateDisplayWrapper extends HTMLElement {
    #date: string = new Date(Date.now()).toISOString();
    #timezone: string = "Europe/Paris";
    #with_time: boolean = true;
    #display_type: DisplayType = DISPLAY_TYPE_ABSOLUTE_FIRST;
    #second_position: SecondPosition = SECOND_POSITION_RIGHT;
    #locale: string = "fr-FR";

    set date(date: string | number) {
        if (typeof date === "number") {
            this.#date = new Date(date).toISOString();
        } else {
            this.#date = date;
        }
        this.update();
    }

    set timezone(timezone: string) {
        this.#timezone = timezone;
        this.update();
    }

    set with_time(with_time: boolean) {
        this.#with_time = with_time;
        this.update();
    }

    set display_type(display_type: DisplayType) {
        this.#display_type = display_type;
        this.update();
    }

    set second_position(second_position: SecondPosition) {
        this.#second_position = second_position;
        this.update();
    }

    set locale(locale: string) {
        this.#locale = locale;
        this.update();
    }

    private update(): void {
        this.innerHTML = "";
        const element = document.createElement(TAG);
        if (!(element instanceof DateDisplayElement)) {
            throw Error(`Failed to create ${TAG} element`);
        }
        element.date = this.#date;
        element.timezone = this.#timezone;
        element.with_time = this.#with_time;
        element.display_type = this.#display_type;
        element.second_position = this.#second_position;
        element.locale = this.#locale;

        this.appendChild(element);
    }

    connectedCallback(): void {
        this.update();
    }
}

if (!window.customElements.get("date-display-wrapper")) {
    window.customElements.define("date-display-wrapper", DateDisplayWrapper);
}

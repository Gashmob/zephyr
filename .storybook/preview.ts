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
import { Preview } from "@storybook/web-components-vite";
import { html } from "lit";
import "../src/main.scss";
import default_theme from "../src/styles/themes/default.scss?inline";

export function getTheme(name: string): string {
    switch (name) {
        default:
        case "default":
            return default_theme;
    }
}

const preview: Preview = {
    parameters: {
        layout: "centered",
        options: {
            storySort: {
                order: [
                    "Home",
                    "Components",
                    "Styles",
                ],
            },
        },
        a11y: { test: "error" },
        backgrounds: { disable: true },
    },
    globalTypes: {
        mode: {
            toolbar: {
                title: "Mode",
                icon: "circlehollow",
                items: ["light", "dark", "system"],
                dynamicTitle: true,
            },
        },
        theme: {
            toolbar: {
                title: "Theme",
                items: ["default"],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        mode: "system",
        theme: "default",
    },
    decorators: [
        (Story, context) => {
            const doc = context.canvasElement.ownerDocument;

            doc.body.setAttribute("data-dark-mode", context.globals.mode);
            doc.body.querySelectorAll<HTMLDivElement>(".docs-story").forEach(
                (elt) => elt.style.backgroundColor = "var(--zr-color-background)",
            );

            const theme_stylesheet = new CSSStyleSheet();
            theme_stylesheet.replaceSync(getTheme(context.globals.theme));
            doc.adoptedStyleSheets = [theme_stylesheet];

            return html`${Story()}`;
        },
    ],
};

export default preview;

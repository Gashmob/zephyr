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
    title: "Styles/Colors",
};
export default meta;

type Story = StoryObj;

export const ThemeColorsStory: Story = {
    render: () => html`
        <table class="theme-colors-table">
            <thead>
            <tr>
                <th>Class name</th>
                <th>Visual</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><code>--zr-color-primary</code></td>
                <td>
                    <div class="doc-color doc-color-primary"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-secondary</code></td>
                <td>
                    <div class="doc-color doc-color-secondary"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-border</code></td>
                <td>
                    <div class="doc-color doc-color-border"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-font</code></td>
                <td>
                    <div class="doc-color doc-color-font"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-font-info</code></td>
                <td>
                    <div class="doc-color doc-color-font-info"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-font-success</code></td>
                <td>
                    <div class="doc-color doc-color-font-success"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-font-warning</code></td>
                <td>
                    <div class="doc-color doc-color-font-warning"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-font-danger</code></td>
                <td>
                    <div class="doc-color doc-color-font-danger"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-background-info</code></td>
                <td>
                    <div class="doc-color doc-color-background-info"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-background-success</code></td>
                <td>
                    <div class="doc-color doc-color-background-success"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-background-warning</code></td>
                <td>
                    <div class="doc-color doc-color-background-warning"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-background-danger</code></td>
                <td>
                    <div class="doc-color doc-color-background-danger"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-kbd-background</code></td>
                <td>
                    <div class="doc-color doc-color-kbd-background"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-kbd-font</code></td>
                <td>
                    <div class="doc-color doc-color-kbd-font"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-pane-background</code></td>
                <td>
                    <div class="doc-color doc-color-pane-background"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-pane-border</code></td>
                <td>
                    <div class="doc-color doc-color-pane-border"></div>
                </td>
            </tr>
            <tr>
                <td><code>--zr-color-pane-shadow</code></td>
                <td>
                    <div class="doc-color doc-color-pane-shadow"></div>
                </td>
            </tr>
            </tbody>
        </table>
    `,
};

export const CommonColorsStory: Story = {
    render: () => html`
        <table class="common-colors-table">
            <tr>
                <td></td>
                <td class="darkness-column">50</td>
                <td class="darkness-column">100</td>
                <td class="darkness-column">200</td>
                <td class="darkness-column">300</td>
                <td class="darkness-column">400</td>
                <td class="darkness-column">500</td>
                <td class="darkness-column">600</td>
                <td class="darkness-column">700</td>
                <td class="darkness-column">800</td>
                <td class="darkness-column">900</td>
                <td class="darkness-column">950</td>
            </tr>
            <tr>
                <td class="color-row">Red</td>
                <td><div class="doc-color doc-color-red-50"></div></td>
                <td><div class="doc-color doc-color-red-100"></div></td>
                <td><div class="doc-color doc-color-red-200"></div></td>
                <td><div class="doc-color doc-color-red-300"></div></td>
                <td><div class="doc-color doc-color-red-400"></div></td>
                <td><div class="doc-color doc-color-red-500"></div></td>
                <td><div class="doc-color doc-color-red-600"></div></td>
                <td><div class="doc-color doc-color-red-700"></div></td>
                <td><div class="doc-color doc-color-red-800"></div></td>
                <td><div class="doc-color doc-color-red-900"></div></td>
                <td><div class="doc-color doc-color-red-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Orange</td>
                <td><div class="doc-color doc-color-orange-50"></div></td>
                <td><div class="doc-color doc-color-orange-100"></div></td>
                <td><div class="doc-color doc-color-orange-200"></div></td>
                <td><div class="doc-color doc-color-orange-300"></div></td>
                <td><div class="doc-color doc-color-orange-400"></div></td>
                <td><div class="doc-color doc-color-orange-500"></div></td>
                <td><div class="doc-color doc-color-orange-600"></div></td>
                <td><div class="doc-color doc-color-orange-700"></div></td>
                <td><div class="doc-color doc-color-orange-800"></div></td>
                <td><div class="doc-color doc-color-orange-900"></div></td>
                <td><div class="doc-color doc-color-orange-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Amber</td>
                <td><div class="doc-color doc-color-amber-50"></div></td>
                <td><div class="doc-color doc-color-amber-100"></div></td>
                <td><div class="doc-color doc-color-amber-200"></div></td>
                <td><div class="doc-color doc-color-amber-300"></div></td>
                <td><div class="doc-color doc-color-amber-400"></div></td>
                <td><div class="doc-color doc-color-amber-500"></div></td>
                <td><div class="doc-color doc-color-amber-600"></div></td>
                <td><div class="doc-color doc-color-amber-700"></div></td>
                <td><div class="doc-color doc-color-amber-800"></div></td>
                <td><div class="doc-color doc-color-amber-900"></div></td>
                <td><div class="doc-color doc-color-amber-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Yellow</td>
                <td><div class="doc-color doc-color-yellow-50"></div></td>
                <td><div class="doc-color doc-color-yellow-100"></div></td>
                <td><div class="doc-color doc-color-yellow-200"></div></td>
                <td><div class="doc-color doc-color-yellow-300"></div></td>
                <td><div class="doc-color doc-color-yellow-400"></div></td>
                <td><div class="doc-color doc-color-yellow-500"></div></td>
                <td><div class="doc-color doc-color-yellow-600"></div></td>
                <td><div class="doc-color doc-color-yellow-700"></div></td>
                <td><div class="doc-color doc-color-yellow-800"></div></td>
                <td><div class="doc-color doc-color-yellow-900"></div></td>
                <td><div class="doc-color doc-color-yellow-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Lime</td>
                <td><div class="doc-color doc-color-lime-50"></div></td>
                <td><div class="doc-color doc-color-lime-100"></div></td>
                <td><div class="doc-color doc-color-lime-200"></div></td>
                <td><div class="doc-color doc-color-lime-300"></div></td>
                <td><div class="doc-color doc-color-lime-400"></div></td>
                <td><div class="doc-color doc-color-lime-500"></div></td>
                <td><div class="doc-color doc-color-lime-600"></div></td>
                <td><div class="doc-color doc-color-lime-700"></div></td>
                <td><div class="doc-color doc-color-lime-800"></div></td>
                <td><div class="doc-color doc-color-lime-900"></div></td>
                <td><div class="doc-color doc-color-lime-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Green</td>
                <td><div class="doc-color doc-color-green-50"></div></td>
                <td><div class="doc-color doc-color-green-100"></div></td>
                <td><div class="doc-color doc-color-green-200"></div></td>
                <td><div class="doc-color doc-color-green-300"></div></td>
                <td><div class="doc-color doc-color-green-400"></div></td>
                <td><div class="doc-color doc-color-green-500"></div></td>
                <td><div class="doc-color doc-color-green-600"></div></td>
                <td><div class="doc-color doc-color-green-700"></div></td>
                <td><div class="doc-color doc-color-green-800"></div></td>
                <td><div class="doc-color doc-color-green-900"></div></td>
                <td><div class="doc-color doc-color-green-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Emerald</td>
                <td><div class="doc-color doc-color-emerald-50"></div></td>
                <td><div class="doc-color doc-color-emerald-100"></div></td>
                <td><div class="doc-color doc-color-emerald-200"></div></td>
                <td><div class="doc-color doc-color-emerald-300"></div></td>
                <td><div class="doc-color doc-color-emerald-400"></div></td>
                <td><div class="doc-color doc-color-emerald-500"></div></td>
                <td><div class="doc-color doc-color-emerald-600"></div></td>
                <td><div class="doc-color doc-color-emerald-700"></div></td>
                <td><div class="doc-color doc-color-emerald-800"></div></td>
                <td><div class="doc-color doc-color-emerald-900"></div></td>
                <td><div class="doc-color doc-color-emerald-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Teal</td>
                <td><div class="doc-color doc-color-teal-50"></div></td>
                <td><div class="doc-color doc-color-teal-100"></div></td>
                <td><div class="doc-color doc-color-teal-200"></div></td>
                <td><div class="doc-color doc-color-teal-300"></div></td>
                <td><div class="doc-color doc-color-teal-400"></div></td>
                <td><div class="doc-color doc-color-teal-500"></div></td>
                <td><div class="doc-color doc-color-teal-600"></div></td>
                <td><div class="doc-color doc-color-teal-700"></div></td>
                <td><div class="doc-color doc-color-teal-800"></div></td>
                <td><div class="doc-color doc-color-teal-900"></div></td>
                <td><div class="doc-color doc-color-teal-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Cyan</td>
                <td><div class="doc-color doc-color-cyan-50"></div></td>
                <td><div class="doc-color doc-color-cyan-100"></div></td>
                <td><div class="doc-color doc-color-cyan-200"></div></td>
                <td><div class="doc-color doc-color-cyan-300"></div></td>
                <td><div class="doc-color doc-color-cyan-400"></div></td>
                <td><div class="doc-color doc-color-cyan-500"></div></td>
                <td><div class="doc-color doc-color-cyan-600"></div></td>
                <td><div class="doc-color doc-color-cyan-700"></div></td>
                <td><div class="doc-color doc-color-cyan-800"></div></td>
                <td><div class="doc-color doc-color-cyan-900"></div></td>
                <td><div class="doc-color doc-color-cyan-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Sky</td>
                <td><div class="doc-color doc-color-sky-50"></div></td>
                <td><div class="doc-color doc-color-sky-100"></div></td>
                <td><div class="doc-color doc-color-sky-200"></div></td>
                <td><div class="doc-color doc-color-sky-300"></div></td>
                <td><div class="doc-color doc-color-sky-400"></div></td>
                <td><div class="doc-color doc-color-sky-500"></div></td>
                <td><div class="doc-color doc-color-sky-600"></div></td>
                <td><div class="doc-color doc-color-sky-700"></div></td>
                <td><div class="doc-color doc-color-sky-800"></div></td>
                <td><div class="doc-color doc-color-sky-900"></div></td>
                <td><div class="doc-color doc-color-sky-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Blue</td>
                <td><div class="doc-color doc-color-blue-50"></div></td>
                <td><div class="doc-color doc-color-blue-100"></div></td>
                <td><div class="doc-color doc-color-blue-200"></div></td>
                <td><div class="doc-color doc-color-blue-300"></div></td>
                <td><div class="doc-color doc-color-blue-400"></div></td>
                <td><div class="doc-color doc-color-blue-500"></div></td>
                <td><div class="doc-color doc-color-blue-600"></div></td>
                <td><div class="doc-color doc-color-blue-700"></div></td>
                <td><div class="doc-color doc-color-blue-800"></div></td>
                <td><div class="doc-color doc-color-blue-900"></div></td>
                <td><div class="doc-color doc-color-blue-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Indigo</td>
                <td><div class="doc-color doc-color-indigo-50"></div></td>
                <td><div class="doc-color doc-color-indigo-100"></div></td>
                <td><div class="doc-color doc-color-indigo-200"></div></td>
                <td><div class="doc-color doc-color-indigo-300"></div></td>
                <td><div class="doc-color doc-color-indigo-400"></div></td>
                <td><div class="doc-color doc-color-indigo-500"></div></td>
                <td><div class="doc-color doc-color-indigo-600"></div></td>
                <td><div class="doc-color doc-color-indigo-700"></div></td>
                <td><div class="doc-color doc-color-indigo-800"></div></td>
                <td><div class="doc-color doc-color-indigo-900"></div></td>
                <td><div class="doc-color doc-color-indigo-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Violet</td>
                <td><div class="doc-color doc-color-violet-50"></div></td>
                <td><div class="doc-color doc-color-violet-100"></div></td>
                <td><div class="doc-color doc-color-violet-200"></div></td>
                <td><div class="doc-color doc-color-violet-300"></div></td>
                <td><div class="doc-color doc-color-violet-400"></div></td>
                <td><div class="doc-color doc-color-violet-500"></div></td>
                <td><div class="doc-color doc-color-violet-600"></div></td>
                <td><div class="doc-color doc-color-violet-700"></div></td>
                <td><div class="doc-color doc-color-violet-800"></div></td>
                <td><div class="doc-color doc-color-violet-900"></div></td>
                <td><div class="doc-color doc-color-violet-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Purple</td>
                <td><div class="doc-color doc-color-purple-50"></div></td>
                <td><div class="doc-color doc-color-purple-100"></div></td>
                <td><div class="doc-color doc-color-purple-200"></div></td>
                <td><div class="doc-color doc-color-purple-300"></div></td>
                <td><div class="doc-color doc-color-purple-400"></div></td>
                <td><div class="doc-color doc-color-purple-500"></div></td>
                <td><div class="doc-color doc-color-purple-600"></div></td>
                <td><div class="doc-color doc-color-purple-700"></div></td>
                <td><div class="doc-color doc-color-purple-800"></div></td>
                <td><div class="doc-color doc-color-purple-900"></div></td>
                <td><div class="doc-color doc-color-purple-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Fuchsia</td>
                <td><div class="doc-color doc-color-fuchsia-50"></div></td>
                <td><div class="doc-color doc-color-fuchsia-100"></div></td>
                <td><div class="doc-color doc-color-fuchsia-200"></div></td>
                <td><div class="doc-color doc-color-fuchsia-300"></div></td>
                <td><div class="doc-color doc-color-fuchsia-400"></div></td>
                <td><div class="doc-color doc-color-fuchsia-500"></div></td>
                <td><div class="doc-color doc-color-fuchsia-600"></div></td>
                <td><div class="doc-color doc-color-fuchsia-700"></div></td>
                <td><div class="doc-color doc-color-fuchsia-800"></div></td>
                <td><div class="doc-color doc-color-fuchsia-900"></div></td>
                <td><div class="doc-color doc-color-fuchsia-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Pink</td>
                <td><div class="doc-color doc-color-pink-50"></div></td>
                <td><div class="doc-color doc-color-pink-100"></div></td>
                <td><div class="doc-color doc-color-pink-200"></div></td>
                <td><div class="doc-color doc-color-pink-300"></div></td>
                <td><div class="doc-color doc-color-pink-400"></div></td>
                <td><div class="doc-color doc-color-pink-500"></div></td>
                <td><div class="doc-color doc-color-pink-600"></div></td>
                <td><div class="doc-color doc-color-pink-700"></div></td>
                <td><div class="doc-color doc-color-pink-800"></div></td>
                <td><div class="doc-color doc-color-pink-900"></div></td>
                <td><div class="doc-color doc-color-pink-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Rose</td>
                <td><div class="doc-color doc-color-rose-50"></div></td>
                <td><div class="doc-color doc-color-rose-100"></div></td>
                <td><div class="doc-color doc-color-rose-200"></div></td>
                <td><div class="doc-color doc-color-rose-300"></div></td>
                <td><div class="doc-color doc-color-rose-400"></div></td>
                <td><div class="doc-color doc-color-rose-500"></div></td>
                <td><div class="doc-color doc-color-rose-600"></div></td>
                <td><div class="doc-color doc-color-rose-700"></div></td>
                <td><div class="doc-color doc-color-rose-800"></div></td>
                <td><div class="doc-color doc-color-rose-900"></div></td>
                <td><div class="doc-color doc-color-rose-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Slate</td>
                <td><div class="doc-color doc-color-slate-50"></div></td>
                <td><div class="doc-color doc-color-slate-100"></div></td>
                <td><div class="doc-color doc-color-slate-200"></div></td>
                <td><div class="doc-color doc-color-slate-300"></div></td>
                <td><div class="doc-color doc-color-slate-400"></div></td>
                <td><div class="doc-color doc-color-slate-500"></div></td>
                <td><div class="doc-color doc-color-slate-600"></div></td>
                <td><div class="doc-color doc-color-slate-700"></div></td>
                <td><div class="doc-color doc-color-slate-800"></div></td>
                <td><div class="doc-color doc-color-slate-900"></div></td>
                <td><div class="doc-color doc-color-slate-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Gray</td>
                <td><div class="doc-color doc-color-gray-50"></div></td>
                <td><div class="doc-color doc-color-gray-100"></div></td>
                <td><div class="doc-color doc-color-gray-200"></div></td>
                <td><div class="doc-color doc-color-gray-300"></div></td>
                <td><div class="doc-color doc-color-gray-400"></div></td>
                <td><div class="doc-color doc-color-gray-500"></div></td>
                <td><div class="doc-color doc-color-gray-600"></div></td>
                <td><div class="doc-color doc-color-gray-700"></div></td>
                <td><div class="doc-color doc-color-gray-800"></div></td>
                <td><div class="doc-color doc-color-gray-900"></div></td>
                <td><div class="doc-color doc-color-gray-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Zinc</td>
                <td><div class="doc-color doc-color-zinc-50"></div></td>
                <td><div class="doc-color doc-color-zinc-100"></div></td>
                <td><div class="doc-color doc-color-zinc-200"></div></td>
                <td><div class="doc-color doc-color-zinc-300"></div></td>
                <td><div class="doc-color doc-color-zinc-400"></div></td>
                <td><div class="doc-color doc-color-zinc-500"></div></td>
                <td><div class="doc-color doc-color-zinc-600"></div></td>
                <td><div class="doc-color doc-color-zinc-700"></div></td>
                <td><div class="doc-color doc-color-zinc-800"></div></td>
                <td><div class="doc-color doc-color-zinc-900"></div></td>
                <td><div class="doc-color doc-color-zinc-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Neutral</td>
                <td><div class="doc-color doc-color-neutral-50"></div></td>
                <td><div class="doc-color doc-color-neutral-100"></div></td>
                <td><div class="doc-color doc-color-neutral-200"></div></td>
                <td><div class="doc-color doc-color-neutral-300"></div></td>
                <td><div class="doc-color doc-color-neutral-400"></div></td>
                <td><div class="doc-color doc-color-neutral-500"></div></td>
                <td><div class="doc-color doc-color-neutral-600"></div></td>
                <td><div class="doc-color doc-color-neutral-700"></div></td>
                <td><div class="doc-color doc-color-neutral-800"></div></td>
                <td><div class="doc-color doc-color-neutral-900"></div></td>
                <td><div class="doc-color doc-color-neutral-950"></div></td>
            </tr>
            <tr>
                <td class="color-row">Stone</td>
                <td><div class="doc-color doc-color-stone-50"></div></td>
                <td><div class="doc-color doc-color-stone-100"></div></td>
                <td><div class="doc-color doc-color-stone-200"></div></td>
                <td><div class="doc-color doc-color-stone-300"></div></td>
                <td><div class="doc-color doc-color-stone-400"></div></td>
                <td><div class="doc-color doc-color-stone-500"></div></td>
                <td><div class="doc-color doc-color-stone-600"></div></td>
                <td><div class="doc-color doc-color-stone-700"></div></td>
                <td><div class="doc-color doc-color-stone-800"></div></td>
                <td><div class="doc-color doc-color-stone-900"></div></td>
                <td><div class="doc-color doc-color-stone-950"></div></td>
            </tr>
        </table>
    `,
};

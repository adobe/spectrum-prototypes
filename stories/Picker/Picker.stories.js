/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { createPicker } from "./Picker";

export default {
  title: "Picker",
  argTypes: {
    scaleMultiplier: {
      name: "active scale multiplier / 1000 (744 = 74.4%)",
      defaultValue: 100,
      control: { type: "range", min: 70, max: 100 },
    },
    duration: {
      name: "active duration (ms)",
      defaultValue: 80,
      control: { type: "range", min: 50, max: 200 },
    },
    ease: {
      name: "active ease function",
      defaultValue: "ease-out",
      options: ["ease-in-out", "ease-in", "ease-out", "ease-linear"],
      control: { type: "select" },
    },
    scale: {
      name: "scale",
      defaultValue: "M",
      options: ["S", "M", "L", "XL"],
      control: { type: "select" },
    },
    animateChevronOnly: {
      name: "only animate chevron on active state",
      defaultValue: false,
      type: { name: "boolean" },
    },
    label: { control: "text" },
    isDisabled: {
      name: "is disabled",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isOpen: {
      name: "is open",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isPlaceholder: {
      name: "is placeholder",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isQuiet: {
      name: "is quiet",
      defaultValue: false,
      type: { name: "boolean" },
    },
  },
};
// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createPicker({ ...args });
};

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Standard.args = {
  label: "Choose a country...",
};

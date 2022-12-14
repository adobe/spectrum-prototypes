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

import { createActionButton } from "./ActionButton";

export default {
  title: "Action Button",
  argTypes: {
    scaleMultiplier: {
      name: "active scale multiplier",
      defaultValue: 80,
      control: { type: "range", min: 70, max: 98 },
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
    label: { control: "text" },
    hideLabel: {
      name: "hide label",
      defaultValue: false,
      type: { name: "boolean" },
    },
    icon: {
      name: "show icon",
      defaultValue: false,
      type: { name: "boolean" },
    },
    size: {
      options: ["S", "M", "L", "XL"],
      defaultValue: "M",
      control: {
        type: "select",
        labels: {
          S: "small",
          M: "medium",
          L: "large",
          XL: "extra-large",
        },
      },
    },
    isQuiet: {
      name: "is quiet",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isSelected: {
      name: "is selected",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isEmphasized: {
      name: "is emphasized",
      defaultValue: false,
      type: { name: "boolean" },
    },
    staticColor: {
      name: "static color",
      options: [false, "staticWhite", "staticBlack"],
      defaultValue: false,
      control: {
        type: "select",
        labels: {
          false: "none",
          staticWhite: "white",
          staticBlack: "black",
        },
      },
    },
    selectedTextColor: {
      name: "selected text color",
    },
    hasHoldIcon: {
      name: "has hold icon",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isDisabled: {
      name: "is disabled",
      defaultValue: false,
      type: { name: "boolean" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createActionButton({ ...args });
};

export const Standard = Template.bind({});
Standard.args = {
  label: "Action",
};

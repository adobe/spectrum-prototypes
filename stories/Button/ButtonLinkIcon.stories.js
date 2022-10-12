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

import { createButtonIconAnimation } from "./ButtonLinkIcon";

export default {
  title: "Button",
  argTypes: {
    duration: {
      name: "hover animation duration (ms)",
      defaultValue: 60,
      control: { type: "range", min: 30, max: 300 },
    },
    triggerEvent: {
      name: "trigger event",
      defaultValue: "hover",
      options: ["hover", "active"],
      control: { type: "select" },
    },
    ease: {
      name: "active ease function",
      defaultValue: "ease-out",
      options: ["ease-in-out", "ease-in", "ease-out", "ease-linear"],
      control: { type: "select" },
    },
    icon: {
      name: "button icon",
      defaultValue: "Arrow100",
      options: ["Arrow75", "Arrow100", "Arrow200", "Arrow300"],
      control: { type: "select" },
    },
    animateButtonIcon: {
      name: "animate the button icon on hover state",
      defaultValue: true,
      type: { name: "boolean" },
    },
    style: {
      options: ["fill", "outline"],
      defaultValue: "fill",
      control: { type: "select" },
    },
    size: {
      options: ["M"],
      defaultValue: "M",
      control: {
        type: "select",
        labels: {
          M: "medium",
        },
      },
    },
    isJustified: {
      name: "is justified",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isPending: {
      name: "is pending",
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
  return createButtonIconAnimation({ ...args });
};

export const ButtonIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ButtonIcon.args = {
  label: "Button",
  variant: "primary",
};

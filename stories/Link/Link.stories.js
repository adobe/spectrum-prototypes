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

import { createLinkIconAnimation } from "./Link";

export default {
  title: "Link",
  argTypes: {
    duration: {
      name: "animation duration (ms)",
      defaultValue: 60,
      control: { type: "range", min: 30, max: 300 },
    },
    movement: {
      name: "animation position movement (px)",
      defaultValue: 3,
      control: { type: "range", min: 0, max: 10 },
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
    iconDirection: {
      name: "icon direction",
      defaultValue: "45",
      options: ["45", "90"],
      control: { type: "select" },
    },
    icon: {
      name: "link icon",
      defaultValue: "Arrow100",
      options: ["Arrow75", "Arrow100", "Arrow200", "Arrow300"],
      control: { type: "select" },
    },
    animateLinkIcon: {
      name: "animate the link icon on hover state",
      defaultValue: true,
      type: { name: "boolean" },
    },
  },
};
// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createLinkIconAnimation({ ...args });
};

export const LinkIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
LinkIcon.args = {
  prelinkText: "For more information, visit the ",
  postlinkText: "or email us.",
  linkText: "Adobe Help Center",
};

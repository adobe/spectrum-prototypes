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
import { createRating } from "./Rating";
import { useEffect, useState } from "@storybook/addons";

export default {
  title: "Rating",
  argTypes: {
    scaleMultiplier: {
      name: "active scale multiplier",
      defaultValue: 70,
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
    isEmphasized: {
      name: "is emphasized",
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

const Template = ({ ...args }) => {
  return createRating({ ...args });
};

export const Standard = Template.bind({});
Standard.args = {};

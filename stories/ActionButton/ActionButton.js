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

import "@spectrum-css/actionbutton/dist/index-vars.css";
import "./ActionButton.css";

import Handlebars from "handlebars";

Handlebars.registerHelper("percentage", (value) => value / 100);
Handlebars.registerHelper("mapUIIconSize", (value) => {
  const map = { XS: 75, S: 75, M: 100, L: 200, XL: 300 };
  if (map.hasOwnProperty(value)) {
    return map[value];
  } else {
    return 100;
  }
});

export const createActionButton = Handlebars.compile(
  `<style>
:root {
  --spectrum-ActionButton-active-animation-ease: var(--spectrum-global-animation-{{ease}});
  --spectrum-ActionButton-active-animation-duration: {{duration}}ms;
  --spectrum-ActionButton-active-scale-multiplier: {{percentage scaleMultiplier}};
}
</style>
<button class="spectrum-ActionButton spectrum-ActionButton--size{{size}}{{#if isQuiet}} spectrum-ActionButton--quiet{{/if}}{{#if isSelected}} is-selected{{/if}}{{#if isEmphasized}} spectrum-ActionButton--emphasized{{/if}}{{#if staticColor}} spectrum-ActionButton--{{staticColor}}{{/if}}"{{#if isDisabled}} disabled{{/if}}>
  {{#if hasHoldIcon}}<svg class="spectrum-Icon spectrum-UIIcon-CornerTriangle{{mapUIIconSize size}} spectrum-ActionButton-hold" focusable="false" aria-hidden="true"><use xlink:href="#spectrum-css-icon-CornerTriangle{{mapUIIconSize size}}" /></svg>{{/if}}
  {{#if icon}}<svg class="spectrum-Icon spectrum-Icon--size{{size}} spectrum-ActionButton-icon" focusable="false" aria-hidden="true" aria-label="Edit">
    <use xlink:href="#spectrum-icon-18-Edit" />
  </svg>{{/if}}
  {{#unless hideLabel}}<span class="spectrum-ActionButton-label">{{label}}</span>{{/unless}}
</button>`
);

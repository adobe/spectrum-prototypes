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

import "@spectrum-css/checkbox/dist/index-vars.css";
import "./Checkbox.css";

import Handlebars from "handlebars";

Handlebars.registerHelper("percentage", (value) => value / 100);

export const createCheckbox = Handlebars.compile(
  `<style>
.spectrum-Checkbox:active .spectrum-Checkbox-box {
  transform: scale({{percentage scaleMultiplier}});
}
:root {
  --spectrum-checkbox-active-animation-ease: var(--spectrum-global-animation-{{ease}});
  --spectrum-checkbox-active-animation-duration: {{duration}}ms;
}
</style>
<label class="spectrum-Checkbox spectrum-Checkbox--size{{size}}{{#if isIndeterminate}} is-indeterminate{{/if}}{{#if isEmphasized}} spectrum-Checkbox--emphasized{{/if}}{{#if isError}} is-invalid{{/if}}{{#if isReadOnly}} is-readOnly{{/if}}">
  <input type="checkbox" class="spectrum-Checkbox-input"{{#if isSelected}} checked{{/if}}{{#if isDisabled}} disabled{{/if}}>
  <span class="spectrum-Checkbox-box">
    <svg class="spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-Checkmark100" />
    </svg>
    <svg class="spectrum-Icon spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-Dash100" />
    </svg>
  </span>
  <span class="spectrum-Checkbox-label">{{label}}</span>
</label>`
);

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

import "@spectrum-css/tokens/dist/index.css";
import "@spectrum-css/switch/dist/index-vars.css";
import "./Switch.css";

import Handlebars from "handlebars";

Handlebars.registerHelper("percentage", (value) => value / 100);

export const createSwitch = Handlebars.compile(
  `<style>
:root {
  --spectrum-switch-active-animation-ease: var(--spectrum-global-animation-{{ease}});
  --spectrum-switch-active-animation-duration: {{duration}}ms;
  --spectrum-switch-active-scale-multiplier: {{percentage scaleMultiplier}};
}
</style>
<div class="spectrum-Switch spectrum-Switch--size{{size}}{{#if isEmphasized}} spectrum-Switch--emphasized{{/if}}{{#if isDisabled}} spectrum-Switch--disabled{{/if}}">
  <input type="checkbox" class="spectrum-Switch-input" id="switch-onoff-0"{{#if isDisabled}} disabled{{/if}}{{#if isSelected}} checked{{/if}}>
  <span class="spectrum-Switch-switch"></span>
  <label class="spectrum-Switch-label" for="switch-onoff-0">{{label}}</label>
</div>`
);

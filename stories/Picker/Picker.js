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

import "@spectrum-css/picker/dist/index-vars.css";
import "@spectrum-css/typography/dist/index-vars.css";
import "@spectrum-css/icon/dist/index-vars.css";
import "./Picker.css";

import Handlebars from "handlebars";

Handlebars.registerHelper("setScaleMultiplier", function (options) {
  const adjustedMultiplier = options.data.root.scaleMultiplier / 100;
  return adjustedMultiplier;
});

Handlebars.registerHelper("mapUIIconSize", (value) => {
  const map = { XS: 75, S: 75, M: 100, L: 200, XL: 300 };
  if (map.hasOwnProperty(value)) {
    return map[value];
  } else {
    return 100;
  }
});

export const createPicker = Handlebars.compile(/*HTML*/ ` 
<style>
  
  :root {
    --spectrum-global-animation-duration-50: 80ms;

    --spectrum-picker-active-animation-ease: var(--spectrum-global-animation-{{ease}});
    --spectrum-picker-active-animation-duration: {{duration}}ms;
  }
  .spectrum-Picker  {
    transition: transform var(--spectrum-picker-active-animation-duration)
      var(--spectrum-picker-active-animation-ease);
  }

  {{#if animateChevronOnly}}
  .spectrum-Picker:active .spectrum-Picker-transform-box {
    transform: scale({{setScaleMultiplier}});
  }
  {{else}}
  .spectrum-Picker:active {
    transform: scale({{setScaleMultiplier}});
  }
  {{/if}} 
</style>

<h4>Picker scaling effect <a href="https://jira.corp.adobe.com/browse/SDS-12198">SDS-12198</a> </h4>
<button class="spectrum-Picker spectrum-Picker--size{{scale}} {{#if isOpen}} is-open{{/if}} {{#if isQuiet}}  spectrum-Picker--quiet{{/if}}" 
 {{#if isDisabled}} disabled{{/if}} 
  aria-haspopup="listbox" style="width: 240px">
  <span class="spectrum-Picker-label {{#if isPlaceholder}} is-placeholder{{/if}}">{{label}}</span>

  <span class="spectrum-Picker-transform-box spectrum-Picker-menuIcon">
    <svg class="spectrum-Icon spectrum-UIIcon-ChevronDown100 " focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-Chevron100" />
    </svg>
  </span>

  <svg class="spectrum-Icon spectrum-UIIcon-Dash{{mapUIIconSize size}} spectrum-Checkbox-partialCheckmark" focusable="false" aria-hidden="true">
  <use xlink:href="#spectrum-css-icon-Dash{{mapUIIconSize size}}" />
  </svg>

</button>`);

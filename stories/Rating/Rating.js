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
import "@spectrum-css/rating/dist/index-vars.css";
import "./Rating.css";
import "./enhancement.js";

import Handlebars from "handlebars";

Handlebars.registerHelper("percentage", (value) => value / 100);

export const createRating = Handlebars.compile(`
<style>
:root {
  --spectrum-Rating-active-animation-ease: var(--spectrum-global-animation-{{ease}});
  --spectrum-Rating-active-animation-duration: {{duration}}ms;
  --spectrum-Rating-active-scale-multiplier: {{percentage scaleMultiplier}};
}
</style>
<div class="spectrum-Rating{{#if isEmphasized}} spectrum-Rating--emphasized{{/if}}{{#if isDisabled}} is-disabled{{/if}}">
  <input class="spectrum-Rating-input" type="range" min="0" max="5" value="0" aria-label="Rating">

  <span class="spectrum-Rating-icon">
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starActive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-Star"></use>
    </svg>
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starInactive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-StarOutline"></use>
    </svg>
  </span>

  <span class="spectrum-Rating-icon">
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starActive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-Star"></use>
    </svg>
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starInactive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-StarOutline"></use>
    </svg>
  </span>

  <span class="spectrum-Rating-icon">
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starActive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-Star"></use>
    </svg>
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starInactive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-StarOutline"></use>
    </svg>
  </span>

  <span class="spectrum-Rating-icon">
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starActive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-Star"></use>
    </svg>
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starInactive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-StarOutline"></use>
    </svg>
  </span>

  <span class="spectrum-Rating-icon">
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starActive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-Star"></use>
    </svg>
    <svg class="spectrum-Icon spectrum-Icon--sizeM spectrum-Rating-starInactive" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-StarOutline"></use>
    </svg>
  </span>
</div>`);

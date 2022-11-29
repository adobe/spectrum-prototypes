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

import "./Button.css";
import "@spectrum-css/button/dist/index-vars.css";
import Handlebars from "handlebars";

Handlebars.registerHelper("setScaleMultiplier", function (options) {
  const adjustedMultiplier = options.data.root.scaleMultiplier / 100;
  return adjustedMultiplier;
});

export const createButton = Handlebars.compile(
  `<style>
:root {
  --spectrum-button-active-animation-ease: var(--spectrum-global-animation-{{ease}});
  --spectrum-button-active-animation-duration: {{duration}}ms;
  --spectrum-button-active-scale-multiplier: {{setScaleMultiplier}};
}
</style>

<button class="spectrum-Button spectrum-Button--{{variant}}{{#if staticColor}} spectrum-Button--{{staticColor}}{{/if}} spectrum-Button--{{style}} spectrum-Button--size{{size}}"{{#if isDisabled}} disabled{{/if}}>
  <span class="spectrum-Button-label">{{label}}</span>
</button>`
);

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

import "@spectrum-css/swatch/dist/index-vars.css";
import "./Swatch.css";

import Handlebars from "handlebars";

Handlebars.registerHelper("percentage", (value) => value / 100);

export const createSwatch = Handlebars.compile(
  `<style>
:root {
  --spectrum-Swatch-active-animation-ease: var(--spectrum-global-animation-{{ease}});
  --spectrum-Swatch-active-animation-duration: {{duration}}ms;
  --spectrum-Swatch-active-scale-multiplier: {{percentage scaleMultiplier}};
}
</style>
<div class="spectrum-Swatch spectrum-Swatch--size{{size}}{{#if shape}} spectrum-Swatch--rectangle{{/if}}{{#if cornerRounding}} spectrum-Swatch--rounding{{cornerRounding}}{{/if}}{{#if isSelected}} is-selected{{/if}}" style="--spectrum-picked-color: rgb(174, 216, 230)" tabindex="0">
  <div class="spectrum-Swatch-fill"></div>
</div>
<br>
<div class="spectrum-Swatch spectrum-Swatch--size{{size}}{{#if shape}} spectrum-Swatch--rectangle{{/if}}{{#if cornerRounding}} spectrum-Swatch--rounding{{cornerRounding}}{{/if}}{{#if isSelected}} is-selected{{/if}}" style="--spectrum-picked-color: rgba(174, 216, 230, 0.3)" tabindex="0">
  <div class="spectrum-Swatch-fill"></div>
</div>
`
);

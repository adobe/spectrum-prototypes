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

import "@spectrum-css/link/dist/index-vars.css";
import "@spectrum-css/typography/dist/index-vars.css";
import "@spectrum-css/icon/dist/index-vars.css";

import Handlebars from "handlebars";

// adding ifEquals checks
Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

export const createButtonIconAnimation = Handlebars.compile(/*HTML*/ ` 
<style>
  .spectrum-Button-label {
    position: relative;
  }

  /* spacer for the icon */
  .spectrum-Button-label:after {
      display: inline-block;
      content: "";
      width: 15px;
      height: 5px;
  }

  /* animate the icon */
  .spectrum-Button svg {
      display: inline-block;
      position: absolute;

      {{#ifEquals iconDirection "45"}}
      rotate: -45deg;
      top: 4px;
      right: -12px;
      {{/ifEquals}}
      
      {{#ifEquals iconDirection "90"}}
      rotate: 0deg;
      top: 9px;
      right: -12px;
      {{/ifEquals}}


      {{#if animateButtonIcon}}
        transition: right {{duration}}ms {{ease}} 0s, top {{duration}}ms {{ease}} 0s;
      {{/if}}
  }

  .spectrum-Button:{{triggerEvent}} svg {
    {{#ifEquals iconDirection "45"}}
      top: calc(4px - {{movement}}px);
      right: calc(-12px - {{movement}}px);
    {{/ifEquals}}

    {{#ifEquals iconDirection "90"}}
      right: calc(-12px - {{movement}}px);
    {{/ifEquals}}
  }



</style>

<div class="spectrum-Examples-item">
  <h4 class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading">Button with icon, animation optional <a href="https://jira.corp.adobe.com/browse/SDS-12274">(SDS-12274)</a></h4>

  <br/>
  <br/>


  <button class="spectrum-Button spectrum-Button--{{variant}}{{#if staticColor}} spectrum-Button--{{staticColor}}{{/if}} spectrum-Button--{{style}} spectrum-Button--size{{size}}"{{#if isDisabled}} disabled{{/if}}>
    <span class="spectrum-Button-label">{{label}}<svg class="spectrum-Icon spectrum-UIIcon-{{icon}} spectrum-Icon--sizeM " aria-hidden="true">
    <use xlink:href="#spectrum-css-icon-{{icon}}" />
  </svg></span>
  </button>

</div>

<br/>


`);

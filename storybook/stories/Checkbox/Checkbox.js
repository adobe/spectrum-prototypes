import "@spectrum-css/checkbox/dist/index-vars.css";
import "@spectrum-css/typography/dist/index-vars.css";
import "@spectrum-css/icon/dist/index-vars.css";
import "./Checkbox.css";
import svg from "@spectrum-css/icon/dist/spectrum-css-icons-medium.svg";

import Handlebars from "handlebars";

Handlebars.registerHelper("percentage", (value) => value / 100);


export const createCheckbox = Handlebars.compile(
  `${svg}<style>.spectrum-Checkbox:active .spectrum-Checkbox-box:before {transform: scale({{percentage scaleMultiplier}});}</style>
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

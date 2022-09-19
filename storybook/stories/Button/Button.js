import "./Button.css";
import "@spectrum-css/button/dist/index-vars.css";
import Handlebars from "handlebars";

Handlebars.registerHelper("percentage", (value) => value / 100);

export const createButton = Handlebars.compile(
  `<style>.spectrum-Button:active {transform: scale({{percentage scaleMultiplier}});}</style>
<button class="spectrum-Button spectrum-Button--{{variant}}{{#if staticColor}} spectrum-Button--{{staticColor}}{{/if}} spectrum-Button--{{style}} spectrum-Button--size{{size}}"{{#if isDisabled}} disabled={{/if}}>
  <span class="spectrum-Button-label">{{label}}</span>
</button>`
);

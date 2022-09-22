import "@spectrum-css/expressvars/dist/spectrum-global.css";
import "@spectrum-css/expressvars/dist/spectrum-medium.css";
import "@spectrum-css/expressvars/dist/spectrum-large.css";
import "@spectrum-css/expressvars/dist/spectrum-light.css";
import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";
import "@spectrum-css/page/dist/index-vars.css";
import "@spectrum-css/icon/dist/index-vars.css";
import "@spectrum-css/typography/dist/index-vars.css";
import "@adobe/focus-ring-polyfill";

import UIIcons from "@spectrum-css/icon/dist/spectrum-css-icons.svg";
import workflowIcons from "@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg";

const parser = new DOMParser();
const UIIconsElement = parser.parseFromString(
  UIIcons,
  "image/svg+xml"
).firstChild;
if (UIIconsElement && UIIconsElement.tagName === "svg") {
  UIIconsElement.style.display = "none";
  document.head.insertBefore(UIIconsElement, null);
}
const workflowIconsElement = parser.parseFromString(
  workflowIcons,
  "image/svg+xml"
).firstChild;
if (workflowIconsElement && workflowIconsElement.tagName === "svg") {
  workflowIconsElement.style.display = "none";
  document.head.insertBefore(workflowIconsElement, null);
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import "@spectrum-css/expressvars/dist/spectrum-global.css";
import "@spectrum-css/expressvars/dist/spectrum-medium.css";
import "@spectrum-css/expressvars/dist/spectrum-large.css";
import "@spectrum-css/expressvars/dist/spectrum-light.css";
import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";
import "@spectrum-css/page/dist/index-vars.css";
import "@spectrum-css/icon/dist/index-vars.css";
import "@spectrum-css/typography/dist/index-vars.css";
import "@adobe/focus-ring-polyfill"

import spectrumCSSIcons from "@spectrum-css/icon/dist/spectrum-css-icons.svg";

const parser = new DOMParser();
const doc = parser.parseFromString(spectrumCSSIcons, 'image/svg+xml');
const svg = doc.firstChild;
if (svg && svg.tagName === 'svg') {
  svg.style.display = 'none';
  document.head.insertBefore(svg, null);
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

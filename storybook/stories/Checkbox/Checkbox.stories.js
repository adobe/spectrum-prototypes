import { createCheckbox } from "./Checkbox";

export default {
  title: "Checkbox",
  argTypes: {
    scaleMultiplier: {
      name: "active scale multiplier",
      defaultValue: 95,
      control: { type: "range", min: 80, max: 98 },
    },
    label: { control: "text" },
    isSelected: {
      name: "is selected",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isIndeterminate: {
      name: "is indeterminate",
      defaultValue: false,
      type: { name: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: ["S", "M", "L", "XL"],
      defaultValue: "M",
      control: {
        type: "select",
        labels: {
          S: "small",
          M: "medium",
          L: "large",
          XL: "extra-large",
        },
      },
    },
    isEmphasized: {
      name: "is emphasized",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isDisabled: {
      name: "is disabled",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isError: {
      name: "is error",
      defaultValue: false,
      type: { name: "boolean" },
    },
    isReadOnly: {
      name: "is read-only",
      defaultValue: false,
      type: { name: "boolean" },
    },
  },
};
// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCheckbox({ ...args });
};

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Standard.args = {
  label: "Checkbox",
};

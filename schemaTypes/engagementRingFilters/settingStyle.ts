export default {
  name: "engagementRingSettingStyle",
  title: "Engagement Ring Setting Style",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
    },
    {
      name: "value",
      title: "Filter Value",
      type: "string",
      description: "Exact category name from Medusa (e.g., 'Side Stone Rings', 'Solitaire Rings')",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first",
    },
  ],
}

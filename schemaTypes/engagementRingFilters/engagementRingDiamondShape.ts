export default {
  name: "engagementRingDiamondShape",
  title: "Engagement Ring Diamond Shape",
  type: "document",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "value",
      type: "string",
      title: "Value",
      description: "Unique identifier",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Controls the display order",
    },
  ],
}

export default {
  name: "engagementRingMetal",
  title: "Engagement Ring Metals",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "value",
      title: "Value",
      type: "string",
    },
    {
      name: "gradient",
      title: "Gradient",
      type: "string",
      description: "CSS linear-gradient for preview (e.g., linear-gradient(135deg, #E8B4B8, #D8A39D, #C28881))",
    },
    {
  name: "order",
  title: "Order",
  type: "number",
  description: "Controls the order metals appear in the filters",
},
  ],
}

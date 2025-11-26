export default {
  name: "braceletFilterStyle",
  title: "Bracelet Filter - Shop by Style",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
   
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
    },
   
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first",
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
}


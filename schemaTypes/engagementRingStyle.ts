export default {
  name: "engagementRingStyle",
  title: "Engagement Ring Style",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "label",
        maxLength: 96,
      },
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
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers show first',
    },
    
  ],
}

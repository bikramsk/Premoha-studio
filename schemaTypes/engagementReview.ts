export default {
  name: "engagementReview",
  title: "Engagement Review",
  type: "document",
  fields: [
    
    {
      name: "title",
      title: "Review Title",
      type: "string",
    },
    {
      name: "review",
      title: "Review Text",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ],
}

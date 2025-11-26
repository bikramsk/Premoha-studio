
export default {
  name: "engagementHighlights",
  title: "Engagement Highlights",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "cards",
      title: "Highlight Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "buttonText",
              title: "Button Text",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: "title",
                maxLength: 96,
              },
            },
            {
              name: "order",
              title: "Display Order",
              type: "number",
              description: "Lower numbers appear first",
            },
          ],
        },
      ],
    },
  ],
}

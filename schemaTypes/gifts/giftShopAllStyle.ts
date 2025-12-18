export default {
  name: "giftStyleCarouselItem",
  title: "Gift Style Carousel Item",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "label",
        maxLength: 96,
      },
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
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first",
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
}




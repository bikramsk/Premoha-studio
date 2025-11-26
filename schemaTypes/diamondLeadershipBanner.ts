export default {
  name: "diamondLeadershipBanner",
  title: "Diamond Leadership Banner",
  type: "document",
  fields: [
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
      name: "buttonLink",
      title: "Button Link",
      type: "url",
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
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description: "background color e.g #002F2F",
    },
  ],
}

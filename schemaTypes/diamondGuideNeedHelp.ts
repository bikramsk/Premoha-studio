export default {
  name: 'diamondGuideNeedHelp',
  title: 'Diamond Guide - Need Help',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'liveChatText',
      title: 'Live Chat Text',
      type: 'string',
    },
  ],
}


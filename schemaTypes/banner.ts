export default {
  name: 'banner',
  type: 'document',
  title: 'Banner',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Banner Image',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text', 
    },
    {
      name: 'buttonSlug',
      title: 'Button Slug',
      type: 'slug',
      
        option:{
          source:'title',
          maxlength:'96',
        },
        validation: Rule => Rule.required(),
      }
    
  ],
}

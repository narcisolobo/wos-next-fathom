import type { CollectionConfig } from 'payload'

const Recordings: CollectionConfig = {
  admin: {
    useAsTitle: 'description',
  },
  slug: 'recordings',
  labels: { plural: 'Recordings', singular: 'Recording' },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'week',
      type: 'number',
      required: true,
    },
    {
      name: 'day',
      type: 'number',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'image',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
  ],
}

export default Recordings

import { CollectionConfig } from 'payload/types';

const Somethings: CollectionConfig = {
  slug: 'somethings',
  auth: false,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },

    // Email added by default
    // Add more fields as needed
  ],
};

export default Somethings;

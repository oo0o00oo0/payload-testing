import { CollectionConfig } from 'payload/types';

const Companies: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user.role === 'master_admin') {
        return true;
      }

      return {
        id: {
          equals: user.company.id,
        },
      };
    },
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
};

export default Companies;

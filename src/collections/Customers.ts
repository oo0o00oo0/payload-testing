import { CollectionConfig } from 'payload/types';
import { selfOrAdmin } from '../access/selfOrAdmin';

const Customers: CollectionConfig = {
  slug: 'customers',
  auth: true,
  access: {
    create: () => true,
    read: selfOrAdmin,
    update: selfOrAdmin,
    delete: ({ req: { user } }) => {
      return user?.collection === 'users';
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },

    // Email added by default
    // Add more fields as needed
  ],
};

export default Customers;

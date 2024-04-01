import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      secure: process.env.NODE_ENV !== 'development',
      sameSite: process.env.NODE_ENV === 'testing' ? 'none' : 'lax',
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user.role === 'master_admin') {
        return true;
      }

      return {
        id: {
          equals: user.id,
        },
      };
    },
  },
  fields: [
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: [
        { label: 'Master Admin', value: 'master_admin' },
        { label: 'Client', value: 'client' },
      ],
      required: true,
    },
    {
      name: 'company',
      label: 'Company',
      type: 'relationship',
      relationTo: 'companies',
      required: false,
    },
  ],
};

export default Users;

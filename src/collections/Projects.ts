import { CollectionConfig } from 'payload/types';

const access = {
  create: ({ req: { user } }) => {
    return user.role === 'master_admin';
  },
  read: ({ req: { user } }) => {
    if (user.role === 'master_admin') {
      return true;
    }
    return {
      'company._id': {
        equals: user.company.id,
      },
    };
  },
  update: ({ req: { user } }) => {
    return user.role === 'master_admin';
  },
  delete: ({ req: { user } }) => {
    return user.role === 'master_admin';
  },
};

const Projects: CollectionConfig = {
  slug: 'projects',
  access: access,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      label: 'Company',
      type: 'relationship',
      relationTo: 'companies',
      required: true,
    },
  ],
};

export default Projects;

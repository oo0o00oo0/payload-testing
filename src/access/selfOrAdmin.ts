import { Access } from 'payload/config';

// export const selfOrAdmin: Access = ({ req: { user } }) => {
export const selfOrAdmin: Access = ({ req }) => {
  console.log('req 123', req);
  if (req.user?.collection === 'users') {
    return true;
  }

  return {
    id: {
      equals: req.user?.id,
    },
  };
};

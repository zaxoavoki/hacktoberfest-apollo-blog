import { checkUserPermissionsOrThrow } from 'server/lib/utils';

import { QueryResolvers } from '../../../generated/server';

export const currentUser: QueryResolvers['currentUser'] = (
  _parent,
  _args,
  { user },
) => {
  checkUserPermissionsOrThrow(user);
  return user;
};

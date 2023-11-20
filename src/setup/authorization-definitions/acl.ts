export const aclData = {
  acl: [
    {
      role: 'admin',
      resources: [
        {
          resource: 'test-acl',
          permissions: ['create', 'read', 'update', 'delete'],
        },
        {
          resource: 'users',
          permissions: ['create', 'read', 'update', 'delete'],
        },
      ],
    },
    {
      role: 'user',
      resources: [
        {
          resource: 'test-acl',
          permissions: ['read'],
        },
        {
          resource: 'users',
          permissions: ['read', 'update'],
        },
        {
          resource: 'users/user',
          permissions: ['read'],
        },
      ],
    },
  ],
};

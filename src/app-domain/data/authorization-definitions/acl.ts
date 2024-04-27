export const aclData = [
  {
    role: 'admin',
    resource: 'test-acl',
    permission: [true, true, true, true],
  },
  {
    role: 'admin',
    resource: 'users',
    permission: [true, true, true, true],
  },
  {
    role: 'user',
    resource: 'test-acl',
    permission: [true, true, true, true],
  },
  {
    role: 'user',
    resource: 'users',
    permission: [false, true, true, false],
  },
  {
    role: 'user',
    resource: 'users/user',
    permission: [false, true, true, false],
  },
  {
    role: 'guest',
    resource: 'test-acl',
    permission: [false, false, false, false],
  },
  {
    role: 'guest',
    resource: 'users',
    permission: [false, false, false, false],
  },
];

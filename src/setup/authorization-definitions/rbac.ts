export const rbacData = [
  {
    role: 'admin',
    create: true,
    read: true,
    update: true,
    delete: true,
  },
  {
    role: 'user',
    create: false,
    read: true,
    update: false,
    delete: false,
  },
  {
    role: 'guest',
    create: false,
    read: false,
    update: false,
    delete: false,
  },
];

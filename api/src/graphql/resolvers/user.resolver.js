const users = [
  {
    id: 1,
    email: 'test@email.com',
    name: 'Test User',
    address: 'Test Address',
  },
  {
    id: 2,
    email: 'test@email.com',
    name: 'Test User',
    address: 'Test Address',
  },
  {
    id: 3,
    email: 'test@email.com',
    name: 'Test User',
    address: 'Test Address',
  },
];

export default {
  Query: {
    allUsers: () => users,
  },
};

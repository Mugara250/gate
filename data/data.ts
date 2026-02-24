import { Role } from 'src/user/enums/role.enum';

export const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'hashedpassword1',
    role: Role.ADMIN,
    isActive: true,
    createdAt: new Date('2025-01-10'),
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    password: 'hashedpassword2',
    role: Role.USER,
    isActive: true,
    createdAt: new Date('2025-02-05'),
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    password: 'hashedpassword3',
    role: Role.USER,
    isActive: false,
    createdAt: new Date('2025-03-01'),
  },
];

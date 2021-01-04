import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('abc123', 10),
    isAdmin: true
  },
  {
    name: 'Feli',
    email: 'feli@example.com',
    password: bcrypt.hashSync('abc123', 10),
  },
  {
    name: 'Test',
    email: 'test@example.com',
    password: bcrypt.hashSync('abc123', 10),
  }
  
]

export default users;
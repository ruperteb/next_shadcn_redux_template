import { hash } from "bcryptjs";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// Mocking a DB

class DB {
  users: User[];
  constructor(initialUsers: User[]) {
    this.users = initialUsers;
  }
  getUserByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}

let db: DB | undefined;

if (!db) {
  const mockPassword = "password@123";
  const hashedPassword = await hash(mockPassword, 10);
  const initialUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@abc.com",
      password: hashedPassword,
    },
  ];
  db = new DB(initialUsers);
}

export default db;

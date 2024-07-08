import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class UserAction {
  public async login(email: string, password: string) {
    try {
      const user = await prisma.user.findFirst({
        select: {
          username: true,
          email: true,
          firstname: true,
          lastname: true,
          password: true,
          role: {
            select: {
              name: true,
            },
          },
        },
        where: {
          email,
        },
      });

      if (!user) throw new Error("Email or Password is incorrect");

      const isValid = await compare(password, user.password);

      if (!isValid) throw new Error("Password is incorrect");

      const payload = {
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role.name,
      };

      const token = sign(payload, String(process.env.API_KEY), {
        expiresIn: "1hr",
      });

      return token;
    } catch (error) {
      throw error;
    }
  }

  public async findUserById(id: number) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async findUserByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async findUserByEmailOrUsername(username: string, email: string) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async createUser(
    username: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ) {
    const check = await this.findUserByEmailOrUsername(username, email);

    if (check) throw new Error("User or Username already exists");

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    try {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashPassword,
          firstname,
          lastname,
          roleId: 1,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserAction();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  return user;
};

export const findUserById = async(userId: string) =>{
    return await prisma.user.findUnique({ where : {id: userId}})
}

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const updateUserToken = async (userId: string, token: string) => {
  await prisma.user.update({
    where: { id: userId },
    data: { token },
  });
};

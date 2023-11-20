import { Request, Response } from 'express';

import { User } from './model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupUserController = ({ sqlRepository }) => {
  const getAllUsers = async (_req: Request, res: Response) => {
    const users = await sqlRepository(User).find({ where: {} });
    if (!users) {
      throw new Error('There are no users');
    }
    return res.status(200).json(users);
  };
  const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await getUserData(userId);
    if (!user) {
      throw new Error("The user doesn't exists");
    }
    return res.status(200).json(user);
  };
  const getUserData = async (userId: string) => {
    return await sqlRepository(User).findOne({ where: { _id: userId } });
  };

  return {
    getAllUsers,
    getUserById,
  };
};

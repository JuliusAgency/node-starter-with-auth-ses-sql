import { Request, Response } from 'express';

import { User, dBApi } from './model';

export const setupUserController = ({ core }) => {
  const logger = core.logger;
  const handler = core.handler;
  const db = core.db;

  const getAllUsers = async (_req: Request, res: Response) => {
    const users = await db(User).find({});
    if (!users || users.length == 0) {
      const message = `There are no users`;
      logger.info(`what: ${message}, where: ${__filename}`);
      throw new handler.AppError({
        code: handler.ResponseCode.NOT_FOUND,
        description: message,
      });
    }
    return res.status(200).json(users);
  };
  const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await getUserData(userId);
    if (!user) {
      const message = `user id ${userId} doesn't exists`;
      logger.info(`what: ${message}, where: ${__filename}`);
      throw new handler.AppError({
        code: handler.ResponseCode.NOT_FOUND,
        description: message,
      });
    }
    return res.status(200).json(user);
  };
  const getUserData = async (userId: string) => {
    return await dBApi(db(User)).findById(userId);
  };

  return {
    getAllUsers,
    getUserById,
  };
};

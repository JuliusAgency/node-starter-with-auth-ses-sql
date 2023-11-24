/* eslint-disable indent */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ModelType {
  ACL = 0,
  RBAC = 1,
}

@Entity('rbacs')
export class Rbac {
  @PrimaryGeneratedColumn('uuid')
  _id: number;
  @Column({ type: 'varchar', default: 'guest' })
  role: string;
  @Column({ type: 'boolean', default: false })
  create: boolean;
  @Column({ type: 'boolean', default: false })
  read: boolean;
  @Column({ type: 'boolean', default: false })
  update: boolean;
  @Column({ type: 'boolean', default: false })
  delete: boolean;
}

export const rulesModel = (type: ModelType) => {
  if (type === ModelType.RBAC) return Rbac;
  return Rbac;
};

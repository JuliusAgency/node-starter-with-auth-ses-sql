/* eslint-disable indent */
import { BaseUser } from '@juliusagency/auth-ses-sql-set';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseUser {
  @Column({ type: 'varchar', default: 'guest' })
  role: string;
  @Column({ nullable: true })
  phone: string;
}

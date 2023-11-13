import { BaseUser } from '@juliusagency/base-user-sql';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends BaseUser {
  @Column({ type: 'varchar', default: 'guest' })
  // eslint-disable-next-line indent
  role: string;
  @Column({ nullable: true })
  // eslint-disable-next-line indent
  phone: string;
}

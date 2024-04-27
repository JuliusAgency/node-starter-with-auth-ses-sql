/* eslint-disable indent */
import { BaseUser, dBApi } from '@juliusagency/base-user-sql';
import { Column, Entity } from 'typeorm';

export { dBApi };

@Entity('users')
export class User extends BaseUser {
  @Column({ type: 'varchar', default: 'guest' })
  role: string;
  @Column({ nullable: true })
  phone: string;
}

// @Entity('users')
// export class User {
//   @PrimaryGeneratedColumn({ name: "id", type: "bigint" })
//   id!: number;
//   @Column({ name: 'name', type: 'varchar', nullable: false })
//   name: string;
//   @Column({ name: 'email', type: 'varchar', nullable: false })
//   email: string;
//   @Column({ name: 'password', type: 'varchar', nullable: false })
//   password: string;
//   @Column()
//   createdAt: Date;
//   @Column({ type: 'varchar', default: 'guest' })
//   role: string;
//   @Column({ nullable: true })
//   phone: string;
// };

import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column({nullable: false})
    first_name!: string;

    @Column({nullable: false})
    last_name!: string;

    @Column({nullable: false})
    email!: string;

    @Column({nullable: false})
    password!: string;

    @Column({nullable: false})
    admin!: boolean;
}
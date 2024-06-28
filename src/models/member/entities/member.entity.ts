import { Server } from "src/models/server/entities/server.entity";
import { User } from "src/models/user/entities/user.entity";
import { UserRole } from "src/models/user_role/entities/user_role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'members' })
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 64, nullable: false})
    nick_name: string
    
    // các ràng buộc:
    @ManyToOne(() => User, (user) => user.members)
    user: User

    @ManyToOne(() => Server, (server) => server.members)
    server: Server

    @OneToMany(() => UserRole, (user_role) => user_role.member)
    user_roles: UserRole[]
}

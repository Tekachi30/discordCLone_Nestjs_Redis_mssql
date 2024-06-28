import { Member } from "src/models/member/entities/member.entity";
import { Server } from "src/models/server/entities/server.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


export enum RoleClient {
    User = "user",
    Admin = "admin",
}
@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64, nullable: false })
    username: string;

    @Column({ length: 64, nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    banner_id_cloud: string

    @Column({ nullable: false })
    banner_cloud: string

    @Column({ nullable: false })
    avatar_cloud: string

    @Column({ nullable: false })
    avatar_id_cloud: string

    @Column({
        type: "enum",
        enum: RoleClient,
        default: RoleClient.User,
    })
    role_client:RoleClient

    // các ràng buộc:
    @OneToMany(() => Member, (member) => member.user)
    members: Member[]

    @OneToMany(() => Server, (server) => server.user)
    servers: Server[]
}

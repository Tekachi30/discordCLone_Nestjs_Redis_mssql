import { Category } from "src/models/category/entities/category.entity";
import { Member } from "src/models/member/entities/member.entity";
import { Role } from "src/models/role/entities/role.entity";
import { User } from "src/models/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'servers' })
export class Server {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64, nullable: false })
    server_name: string

    @Column({ nullable: false })
    id_owner: number

    @Column({ nullable: false })
    banner_id_cloud: string

    @Column({ nullable: false })
    banner_cloud: string

    @Column({ nullable: false })
    avatar_cloud: string

    @Column({ nullable: false })
    avatar_id_cloud: string

    @Column({ nullable: true, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    // các ràng buộc:
    @ManyToOne(() => User, (user) => user.servers)
    user: User

    @OneToMany(() => Member, (member) => member.server)
    members: Member[]

    @OneToMany(() => Role, (role) => role.server)
    roles: Role[]

    @OneToMany(() => Category, (category) => category.server)
    categorys: Category[]
}
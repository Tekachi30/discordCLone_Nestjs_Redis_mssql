import { CategoryPermission } from "src/models/category_permission/entities/category_permission.entity";
import { RolePermission } from "src/models/role_permission/entities/role_permission.entity";
import { Server } from "src/models/server/entities/server.entity";
import { UserRole } from "src/models/user_role/entities/user_role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'roles' })
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 64, nullable: false })
    role_name: string

    // các ràng buộc
    @OneToMany(() => UserRole, (user_role) => user_role.role)
    user_roles: UserRole[]

    @OneToMany(() => CategoryPermission, (category_permission) => category_permission.role)
    category_permissions: CategoryPermission[]

    @OneToMany(() => RolePermission, (role_permission) => role_permission.role)
    role_permissions: RolePermission[]

    @ManyToOne(() => Server, (server) => server.roles)
    server: Server
}

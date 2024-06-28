import { Permission } from "src/models/permissions/entities/permission.entity";
import { Role } from "src/models/role/entities/role.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'role_permissions' })
export class RolePermission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    status: boolean

    // các ràng buộc:
    @ManyToOne(() => Role, (role) => role.role_permissions)
    role: Role

    @ManyToOne(() => Permission, (permission) => permission.role_permissions)
    permission: Permission
}

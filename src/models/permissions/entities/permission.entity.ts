import { CategoryPermission } from "src/models/category_permission/entities/category_permission.entity";
import { RolePermission } from "src/models/role_permission/entities/role_permission.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'permissions' })
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    // các ràng buộc:
    @ManyToOne(() => RolePermission, (role_permission) => role_permission.permission)
    role_permissions: RolePermission

    @ManyToOne(() => CategoryPermission, (category_permission) => category_permission.permission)
    category_permissions: CategoryPermission
}

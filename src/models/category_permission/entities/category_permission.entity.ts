import { Category } from "src/models/category/entities/category.entity";
import { Permission } from "src/models/permissions/entities/permission.entity";
import { Role } from "src/models/role/entities/role.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'category_permissions' })
export class CategoryPermission {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    status: boolean

    // các ràng buộc:
    @ManyToOne(() => Role, (role) => role.category_permissions)
    role: Role

    @ManyToOne(() => Category, (category) => category.category_permissions)
    category: Category

    @ManyToOne(() => Permission, (permission) => permission.category_permissions)
    permission: Permission
}

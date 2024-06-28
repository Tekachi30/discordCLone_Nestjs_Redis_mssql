import { Member } from "src/models/member/entities/member.entity";
import { Role } from "src/models/role/entities/role.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_roles' })
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number;

    // các ràng buộc:
    @ManyToOne(() => Member, (member) => member.user_roles)
    member: Member

    @ManyToOne(() => Role, (role) => role.user_roles)
    role: Role
}

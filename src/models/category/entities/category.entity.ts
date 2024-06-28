import { CategoryPermission } from "src/models/category_permission/entities/category_permission.entity";
import { Channel } from "src/models/channel/entities/channel.entity";
import {  } from "src/models/role_permission/entities/role_permission.entity";
import { Server } from "src/models/server/entities/server.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categorys' })
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 64 ,nullable: false})
    name_category: string

    @Column({nullable: false})
    private_status: boolean

    // các ràng buộc: 
    @OneToMany(() => CategoryPermission, (category_permission) => category_permission.category)
    category_permissions: CategoryPermission[]

    @OneToMany(() => Channel, (channel) => channel.category)
    channels: Channel[]

    @ManyToOne(() => Server, (server) => server.categorys)
    server: Server
}

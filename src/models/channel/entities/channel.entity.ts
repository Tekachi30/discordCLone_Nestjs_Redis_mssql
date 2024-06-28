import { Category } from 'src/models/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum TypeChannel {
  Chat = 'chat',
  Call = 'call',
}
@Entity({ name: 'channels' })
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64, nullable: false })
  name_channel: string;

  @Column({
    type: 'enum',
    enum: TypeChannel,
    default: TypeChannel.Chat,
  })
  type_channel: TypeChannel;

  // các ràng buộc:
  @ManyToOne(() => Category, (category) => category.channels)
  category: Category;
}

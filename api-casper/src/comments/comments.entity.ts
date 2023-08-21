import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column({ nullable: false, type: 'text' })
  commentText: string;

  @Column({ nullable: false, type: 'int' })
  totalValuations: number;

  @Column({ nullable: false, type: 'int' })
  commId: number;

  @Column({ nullable: false, type: 'int' })
  userId: number;
}

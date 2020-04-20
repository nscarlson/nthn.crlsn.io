import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity('post')
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', nullable: true })
    content: string

    @Column({ type: 'varchar', nullable: true })
    slug: string

    @Column({ type: 'varchar', nullable: true })
    title: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    @Column({
        name: 'deleted_at',
        type: 'timestamp without time zone',
        nullable: true,
    })
    deletedAt: Date
}

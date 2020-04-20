import { MigrationInterface, QueryRunner, Table } from 'typeorm'

const TABLE_NAME = 'post'

export class CreatePostTable1575398392327 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: TABLE_NAME,
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'slug',
                        type: 'varchar',
                    },
                    {
                        name: 'content',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp without time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp without time zone',
                        default: 'now()',
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp without time zone',
                        isNullable: true,
                    },
                ],
            }),
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(TABLE_NAME)
    }
}

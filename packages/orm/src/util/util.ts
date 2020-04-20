import { QueryRunner } from 'typeorm'

/**
 * Utility to programmatically drop foreign key relationships by name
 *
 * @param {QueryRunner} queryRunner Pass in the QueryRunner from the migration's context
 * @param {string} tableName Name of the table to alter
 * @param {string[]} foreignKeyNames iejfiejf
 *
 * @returns {Promise} dfef
 */
export async function dropForeignKeys(
    queryRunner: QueryRunner,
    tableName: string,
    foreignKeyNames: string[],
) {
    const table = await queryRunner.getTable(tableName)

    if (table) {
        const fkDropList = table.foreignKeys.filter(
            (fk) =>
                !!fk.columnNames.filter((columnName) =>
                    foreignKeyNames.includes(columnName),
                ).length,
        )

        for (const fk of fkDropList) {
            await queryRunner.dropForeignKey(tableName, fk)
        }
    }
}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProgram1584007729335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      const table = new Table({
        name: 'program',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true
          },
          {
            name: 'name',
            type: 'char',
          },
          {
            name: 'title',
            type: 'char'
          },
          {
            name: 'updateAt',
            type: 'timestamp'
          }
        ]
      })
      queryRunner.createTable(table, true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}

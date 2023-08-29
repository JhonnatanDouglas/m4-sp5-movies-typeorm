import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693176835117 implements MigrationInterface {
    name = 'InitialMigration1693176835117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" text, "duration" integer NOT NULL, "price" numeric(10,2) NOT NULL, CONSTRAINT "UQ_3a794f850bd3e432c46b3faa913" UNIQUE ("name"), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}

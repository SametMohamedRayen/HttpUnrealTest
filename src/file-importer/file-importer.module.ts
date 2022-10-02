import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileEntity } from "./entities/file.entity";
import { FileImporterController } from "./controllers/file-importer.controller";
import { FilesService } from "./services/files.service";

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [FileImporterController],
  providers: [FilesService],
})
export class FileImporterModule {}

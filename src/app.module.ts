import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileImporterModule } from './file-importer/file-importer.module';
import { MulterModule } from "@nestjs/platform-express";

@Module({
  imports: [
    MulterModule.register(),
    FileImporterModule,
    TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'http_test',
      autoLoadEntities: true,
      synchronize: true,
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

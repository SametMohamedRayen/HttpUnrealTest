import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../entities/file.entity';
import { CreateFileDto } from '../dto/create-file.dto';
import { UpdateFileDto } from '../dto/update-file.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  async create(createFileDto: CreateFileDto) {
    createFileDto.designation = createFileDto.designation.split("\\")[createFileDto.designation.split("\\").length-1].split(".")[0] + "-" + uuidv4();
    return await this.fileRepository.save(createFileDto);
  }

  async findAll() {
    return await this.fileRepository.find();
  }

  async findOne(file64base: string) {
    return await this.fileRepository.find({ where : {file64base: file64base}});
  }

  async update(id: number, updateFileDto: UpdateFileDto) {
    return await this.fileRepository.update(id, updateFileDto);
  }

  async remove(id) {
    return await this.fileRepository.delete(id);
  }
}
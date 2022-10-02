import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from '../entities/file.entity';
import { CreateFileDto } from '../dto/create-file.dto';
import { UpdateFileDto } from '../dto/update-file.dto';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}
  async create(createFileDto: CreateFileDto) {
    return await this.fileRepository.save(createFileDto);
  }

  async findAll() {
    return await this.fileRepository.find();
  }

  async findOne(id: number) {
    return await this.fileRepository.find({ where : {id: id}});
  }

  async update(id: number, updateFileDto: UpdateFileDto) {
    return await this.fileRepository.update(id, updateFileDto);
  }

  async remove(id) {
    return await this.fileRepository.delete(id);
  }
}
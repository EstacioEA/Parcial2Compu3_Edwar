import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ) {}
  async create(createClientDto: CreateClientDto) {
    const client = await this.clientRepository.create(createClientDto)
    return await this.clientRepository.save(client);
  }

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOne(id: number) {
    const client = await this.clientRepository.findOneBy({id})
    if (!client) {
      throw new NotFoundException("Client not found")
    }
    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOneBy({id})
    if (!client) {
      throw new NotFoundException("Client not found")
    }
    return this.clientRepository.update(id, updateClientDto);
  }

  async remove(id: number) {
    const client = await this.clientRepository.findOneBy({id})
    if (!client) {
      throw new NotFoundException("Client not found")
    }
    return this.clientRepository.remove(client);
  }
}

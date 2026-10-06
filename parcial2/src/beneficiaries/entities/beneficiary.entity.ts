import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from '../../clients/entities/client.entity.js';

export class Beneficiary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    alias: string;

    @ManyToOne(() => Client)
    @JoinColumn({name: "client_id"})
    clientId: Client
}

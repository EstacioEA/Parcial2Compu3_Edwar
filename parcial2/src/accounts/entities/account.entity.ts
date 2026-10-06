import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from '../../clients/entities/client.entity.js';

@Entity("accounts")
export class Account {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true, name: "account_number"})
    accountNumber: string;
    @Column({enum: ["SAVINGS","CHECKING"]})
    type: string;
    @Column()
    balance: number;
    @Column({name: "daily_limit"})
    dailyLimit: number;
    @Column({enum: ["ACTIVE","FROZEN","CLOSED"]})
    status: string

    @ManyToOne(() => Client)
    @JoinColumn({name: "client_id"})
    client:Client
}
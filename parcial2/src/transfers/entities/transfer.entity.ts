import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../../accounts/entities/account.entity.js';

@Entity("transfers")
export class Transfer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    reference: string;
    @Column()
    amount: number;
    @Column({enum: ["PENDING","COMPLETED","REJECTED"]})
    status: string

    @ManyToOne(()=>Account)
    @JoinColumn({name:"account_id"})
    sourceAccountId: Account;
    
    @ManyToOne(()=>Account)
    @JoinColumn({name:"account_id"})
    destinationAccountId: Account;

    @Column({nullable:true})
    rejectionReason?:string

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
}
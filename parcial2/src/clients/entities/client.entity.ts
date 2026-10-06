import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true, name: "document_number"})
    documentNumber: string;
    @Column({name: "full_name"})
    fullName: string;
    @Column()
    email: string;
    @Column()
    phone: string
}
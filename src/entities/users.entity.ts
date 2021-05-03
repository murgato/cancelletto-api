import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100, unique: true })
    userName: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'text' })
    dateBorn: Date;

    @Column({ type: 'text' })
    height: Number;

    @Column({ type: 'text' })
    weight: Number;
    
    @Column({ type: 'text' })
    imc: Number;

    @Column({ type: 'date' })
    dateCreate: Date;

    @Column({ type: 'date', default: null })
    dateModificated: Date;

    @Column({ type: 'bigint', default: 1 })
    status: number;
}
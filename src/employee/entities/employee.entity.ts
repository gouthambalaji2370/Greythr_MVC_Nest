import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../../address/entities/address.entity';

@Entity("employee_demographics")
export class Employee{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default:null})
    phoneNumber:string;

    @Column({default:null})
    employeeCode:string;

    @Column({default:null})
    aadharNumber:string;

    @Column({default:null})
    gender:string;

    @Column({default:null})
    bloodGroup:string;

    @Column()
    emailId:string;

    @Column({default:null})
    dob:string;

    @Column("decimal",{default:null})
    sslcScore:number;

    @Column("decimal",{default:null})
    hscScore:number;

    @Column("decimal",{default:null})
    ugScore:number;

    @Column({default:null})
    fatherName:string;

    @Column({default:null})
    motherName:string;

    @Column({default:null})
    emergencyContactName:string;

    @Column({default:null})
    emergencyContactNumber:string;

    @Column({default:null})
    emergencyContactRelation:string;


    @OneToMany(type => Address, (address) => address.employee,{cascade:['insert','update']})
    @JoinColumn()
    addressSet: Address[];


}

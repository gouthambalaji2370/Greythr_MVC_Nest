import { Address } from 'src/address/entities/address.entity';
import { IsEmail, IsNotEmpty,IsNotEmptyObject, Matches } from 'class-validator';
const boolRegex = /^[2-9][0-9]{11}$/;

export class CreateEmployeeDto {
    
    @IsNotEmpty()
    readonly  name: string;

    @IsNotEmpty()
    readonly role:string;
    
    @IsEmail()    
    readonly  emailId: string;

    @IsNotEmpty()
    readonly phoneNumber:string;

    @IsNotEmpty()
    readonly employeeCode:string;

    @IsNotEmpty()
    @Matches(boolRegex,{
        message:`enter a valid aadhar number`
      })
    readonly aadharNumber:string;

    @IsNotEmpty()
    readonly gender:string;

    @IsNotEmpty()
    readonly bloodGroup:string;

    @IsNotEmpty()
    readonly dob:string;

    @IsNotEmpty()
    readonly sslcScore:number;

    @IsNotEmpty()
    readonly hscScore:number;

    @IsNotEmpty()
    readonly ugScore:number;

    @IsNotEmpty()
    readonly fatherName:string;

    @IsNotEmpty()
    readonly motherName:string;

    @IsNotEmpty()
    readonly emergencyContactName:string;

    @IsNotEmpty()
    readonly emergencyContactNumber:string;

    @IsNotEmpty()
    readonly emergencyContactRelation:string;


    @IsNotEmptyObject()
    readonly addressSet: Address[];
}

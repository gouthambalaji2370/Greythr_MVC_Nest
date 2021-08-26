import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeRepository } from './employee.repository';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private employeeRepository:EmployeeRepository){

  }
  async create(createEmployeeDto: CreateEmployeeDto) {
    
    let data= await this.employeeRepository.save(
      {
        name:createEmployeeDto.name,
        emailId:createEmployeeDto.emailId,
        phoneNumber:createEmployeeDto.phoneNumber,
        dob:createEmployeeDto.dob,
        addressSet:createEmployeeDto.addressSet,
        aadharNumber:createEmployeeDto.aadharNumber,
        fatherName:createEmployeeDto.fatherName,
        motherName:createEmployeeDto.motherName,
        emergencyContactName:createEmployeeDto.emergencyContactName,
        emergencyContactNumber:createEmployeeDto.emergencyContactNumber,
        emergencyContactRelation:createEmployeeDto.emergencyContactRelation,
        role:createEmployeeDto.role,
        employeeCode:createEmployeeDto.employeeCode,
        ugScore:createEmployeeDto.ugScore,
        hscScore:createEmployeeDto.hscScore,
        sslcScore:createEmployeeDto.sslcScore,
        gender:createEmployeeDto.gender,
        bloodGroup:createEmployeeDto.bloodGroup
      });
      
    return {success:true,message:"employee added to greythr database"};
  }

}

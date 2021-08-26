import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressRepository } from './address.repository';

@Module({
  imports:[TypeOrmModule.forFeature([AddressRepository])],
  controllers: [AddressController],
  providers: [AddressService,AddressRepository]
})
export class AddressModule {}

import { Repository, EntityRepository } from 'typeorm';
import { Address } from './entities/address.entity';


@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{
}
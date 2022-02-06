import { IFixture } from '../../interfaces/IFixture';
import { ModelDefinition } from '@nestjs/mongoose';
import { UniqueEntityID } from '../../../data-access/mongoose/UniqueEntityID';
import { TenantEntity, TenantFeature } from '../../../tenant/entities/tenant.entity';
import { TenantCurrency } from '../../../tenant/entities/schemas/tenant-info.schema';


export const tenantFixture: IFixture<TenantEntity, ModelDefinition> = {
  target: 'mainDb',
  feature: TenantFeature,
  entities: [
   /* {
      id: new UniqueEntityID().toString(),
      code: 'bioscenter',
      name: 'BIOS CENTER TECNOLOGY SAS',
      isActive: true,
      info: {
        country: 'Colombia',
        email: 'gabriel@bioscenter.com.co',
        description: 'Cliente por defecto para las aplicaciones multitenants que desarrollamos',
        webSite: 'https://bioscenter.com.co/',
        nit: '0000.00000.0000000',
        currency: TenantCurrency.COP,
      },
    },*/

    {
      id: new UniqueEntityID().toString(),
      code: 'CO',
      name: 'Colombia',
      isActive: true,
      info: {
        country: 'CO',
        email: 'gabriel@bioscenter.com.co',
        description: 'Cliente por defecto para las aplicaciones multitenants que desarrollamos',
        webSite: 'https://bioscenter.com.co/',
        nit: '0000.00000.0000000',
        currency: TenantCurrency.COP,
        responsible: {
          email: 'gabriel@bioscenter.com.co',
          firstname: 'Gabriel',
          lastname: 'Ureña',

        }
      },
    }

  ],
};
import { Get, Controller, Res, Param, UseGuards, HttpStatus, Inject } from '@nestjs/common';

import { Response } from 'express';
import { Result } from 'src/shared/core/class/result';
import { HeaderApiKeyGuard } from '../../auth/guard/header-api-key.guard';
import { IAppCQRSBus } from '../../app-cqrs/interfaces/IAppCQRSBus';
import { TenantEntity } from '../entities/tenant.entity';
import { GetAllTenantsQuery } from '../cqrs/queries/impl/get-all-tenants.query';
import { TenantMapper } from '../mappers/tenant.mapper';
import { GetOneTenantQuery } from '../cqrs/queries/impl/get-one-tenant.query';


@Controller('tenants')
export class TenantController {


  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
    private readonly _tenantMapper: TenantMapper,
  ) {
  }

  @Get('all')
  @UseGuards(HeaderApiKeyGuard)
  async getTenants(@Res() resp: Response) {
    const result = await this._cqrsBus.execQuery<Result<Array<TenantEntity>>>(new GetAllTenantsQuery({ where: { isActive: { is: true } } }));
    if (result.isFailure) {
      resp.status(HttpStatus.INTERNAL_SERVER_ERROR).send(result.unwrapError().message);
    }
    const tenantsResponses = result.unwrap().map(this._tenantMapper.persistent2Dto);
    resp.send(tenantsResponses.map(({ id, name, code, isActive }) => {
      return {
        id,
        name,
        code,
        isActive,
      };
    }));
  }


  @Get('one/:tenant')
  @UseGuards(HeaderApiKeyGuard)
  async getOneTenant(@Param('tenant') tenantCode: string,

    @Res() resp: Response) {

    if (!tenantCode) {
      resp.status(HttpStatus.NOT_FOUND).send(`No tenant specified`);
    }

    const result = await this._cqrsBus.execQuery<Result<TenantEntity>>(new GetOneTenantQuery({ where: { code: { eq: tenantCode } } }));
    if (result.isFailure) {
      resp.status(HttpStatus.INTERNAL_SERVER_ERROR).send(result.unwrapError().message);
    }

    const { id, code, name, isActive } = result.unwrap();
    resp.send({ id, code, name, isActive })




  }


}

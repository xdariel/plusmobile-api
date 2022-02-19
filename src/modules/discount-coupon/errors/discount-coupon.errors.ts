import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace DiscountCouponErrors {
  const _context = 'DiscountCouponErrors';
  const messagesProvider = {
    en, es,
  };

  export class DiscountCouponWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'DiscountCouponWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class DiscountCouponFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'DiscountCouponFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

  export class PercentageInvalid extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'PercentageInvalid',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



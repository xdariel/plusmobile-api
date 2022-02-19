import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ProductsErrors {
  const _context = 'ProductsErrors';
  const messagesProvider = {
    en, es,
  };

  export class ProductsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ProductsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ProductsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ProductsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



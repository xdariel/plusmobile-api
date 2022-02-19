import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace StoreErrors {
  const _context = 'StoreErrors';
  const messagesProvider = {
    en, es,
  };

  export class StoreWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'StoreWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class StoreFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'StoreFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



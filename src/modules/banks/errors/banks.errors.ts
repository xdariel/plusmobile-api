import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace BanksErrors {
  const _context = 'BanksErrors';
  const messagesProvider = {
    en, es,
  };

  export class BanksWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'BanksWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class BanksFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'BanksFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



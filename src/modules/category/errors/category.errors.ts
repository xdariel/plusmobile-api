import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace CategoryErrors {
  const _context = 'CategoryErrors';
  const messagesProvider = {
    en, es,
  };

  export class CategoryWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'CategoryWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class CategoryFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'CategoryFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



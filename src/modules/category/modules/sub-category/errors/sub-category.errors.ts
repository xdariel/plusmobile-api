import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace SubCategoryErrors {
  const _context = 'SubCategoryErrors';
  const messagesProvider = {
    en, es,
  };

  export class SubCategoryWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'SubCategoryWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class SubCategoryFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'SubCategoryFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



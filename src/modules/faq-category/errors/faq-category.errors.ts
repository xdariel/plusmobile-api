import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FaqCategoryErrors {
  const _context = 'FaqCategoryErrors';
  const messagesProvider = {
    en, es,
  };

  export class FaqCategoryWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FaqCategoryWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FaqCategoryFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FaqCategoryFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



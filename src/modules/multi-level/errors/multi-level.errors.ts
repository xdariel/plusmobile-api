import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace MultiLevelErrors {
  const _context = 'MultiLevelErrors';
  const messagesProvider = {
    en, es,
  };

  export class MultiLevelWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'MultiLevelWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class MultiLevelFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'MultiLevelFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



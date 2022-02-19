import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace AttributesErrors {
  const _context = 'AttributesErrors';
  const messagesProvider = {
    en, es,
  };

  export class AttributesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'AttributesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class AttributesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'AttributesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



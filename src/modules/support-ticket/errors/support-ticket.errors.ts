import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace SupportTicketErrors {
  const _context = 'SupportTicketErrors';
  const messagesProvider = {
    en, es,
  };

  export class SupportTicketWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'SupportTicketWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class SupportTicketFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'SupportTicketFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}



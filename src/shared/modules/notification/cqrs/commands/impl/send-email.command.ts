import { AppCommand } from '../../../../app-cqrs/base/AppCommand';
import { IMailData } from '../../../interfaces/IMailData';
import { IAppMailAttach } from '../../../interfaces/IAppMailService';


export class SendEmailCommand extends AppCommand {
  constructor(public request: { to: string, data: IMailData, attachments?:Array<IAppMailAttach> }) {
    super()
  }
}

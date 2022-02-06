import { IMailData } from './IMailData';
import { Result } from 'src/shared/core/class/result';


export interface IAppMailAttach {
  filename: string;
  content?: any;
  path?: string;
  contentType?: string;
  cid?: string;
}

export interface IAppMailService {
  send(to: string, data: IMailData, attachments?:Array<IAppMailAttach>): Promise<Result<void>>
}

export namespace IAppMailService {
  export const $ = Symbol('IAppMailService');
}
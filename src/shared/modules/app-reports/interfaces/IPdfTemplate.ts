import { APP_LANG } from 'src/shared/resources/lang.type';
import { IDocDefinition } from './IDocDefinition';


export interface IPdfTemplate<Props> {
  name: string;
  getDocDef(props: Props, lang?: APP_LANG): IDocDefinition;

}
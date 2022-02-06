import { ITemplate, TemplateLang } from '../../interfaces/ITemplate';
import { IMailData } from '../../interfaces/IMailData';

export const GENERIC_TEMPLATE = 'GENERIC_TEMPLATE';
export type GenericTemplateProps = IMailData

class GenericTemplate implements ITemplate<GenericTemplateProps> {
  name: string = GENERIC_TEMPLATE;

  getEmailTmpl({ subject,body,subtitle, title  }: GenericTemplateProps, lang: TemplateLang): IMailData {
    switch (lang) {
      case 'en':
        return {
          subject,
          title,
          subtitle,
          body: `<p style="text-align: justify;  word-wrap: break-word;">
                  ${body}
                  </p>`,
        };

      case 'es':
        return {
          subject,
          title,
          subtitle,
          body: `<p style="text-align: justify;  word-wrap: break-word;">
                  ${body}
                  </p>`,
    }
  }

  }

  getTextTmpl(props: GenericTemplateProps, lang?: TemplateLang): string {
    throw new Error('Implements me!');
  }

}

const genericTemplate = new GenericTemplate();
export { genericTemplate };
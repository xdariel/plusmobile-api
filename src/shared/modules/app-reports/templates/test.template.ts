import { IPdfTemplate } from '../interfaces/IPdfTemplate';
import { APP_LANG } from '../../../resources/lang.type';
import { IDocDefinition } from '../interfaces/IDocDefinition';


export const TEST_TEMPLATE = 'TEST_TEMPLATE';
export type TestTemplateProps = {
  name: string;
}

class TestTemplate implements IPdfTemplate<TestTemplateProps> {
  name: string = TEST_TEMPLATE;


  getDocDef({ name }: TestTemplateProps, lang?: APP_LANG): IDocDefinition {


    const defaultDef: IDocDefinition = {
      content: [
        { text: 'Prueba de la plantilla', color: 'red', fontSize: 32, style: 'header' },
        { image: 'logo', width: 130 },

        {
          qr: 'Esto es una prueba usando el generador de plantillas',
        },
        '/n',
        {
          text: `Hola: ${name}`,
        },
      ],
      images: {
        logo: "https://res.cloudinary.com/dlo96as16/image/upload/v1631911653/michigan/mm-blanco-transparent_wh7snf.png",
      },

    };

    switch (lang) {
      case 'es':
        return defaultDef;
      case 'en':
        return defaultDef;
      default: {
        return defaultDef;
      }
    }

  }

}

const pdfTestTemplate = new TestTemplate();
export { pdfTestTemplate };
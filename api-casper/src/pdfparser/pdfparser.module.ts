import { Module } from '@nestjs/common';
import { PdfparserController } from './pdfparser.controller';
import {PerfilacademicoModule} from "../perfilacademico/perfilacademico.module";
import {PerfilacademicoService} from "../perfilacademico/perfilacademico.service";

@Module({
  imports: [PerfilacademicoModule],
  providers: [PerfilacademicoService],
  controllers: [PdfparserController],
  exports: [],
})
export class PdfparserModule {}

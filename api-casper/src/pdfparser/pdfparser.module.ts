import { Module } from '@nestjs/common';
import { PdfparserController } from './pdfparser.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [PdfparserController],
  exports: [],
})
export class PdfparserModule {}

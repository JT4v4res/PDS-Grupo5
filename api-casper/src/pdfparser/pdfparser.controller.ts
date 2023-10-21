import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { PDFExtraction } from './pdfparser';
import * as fs from 'fs';

@Controller('/pdf')
export class PdfparserController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPdf(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const uploadDir = join(__dirname, '..', '..', 'historico');

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    file.originalname = 'historico.pdf';

    const fileStream: fs.WriteStream = createWriteStream(
      `${uploadDir}/${file.originalname}`,
    );

    const writePromise = new Promise((resolve, reject): void => {
      fileStream.write(file.buffer, (err: Error): void => {
        if (err) {
          reject(err);
        } else {
          fileStream.end(resolve);
        }
      });
    });

    await writePromise;

    await PDFExtraction();

    return { message: 'file saved successfully!' };
  }
}

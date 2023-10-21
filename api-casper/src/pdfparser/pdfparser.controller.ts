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

@Controller('/pdf')
export class PdfparserController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPdf(@UploadedFile() file: Express.Multer.File): Promise<any> {
    const uploadDir = join(__dirname, '..', '..', 'historico');

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    const fileStream = createWriteStream(file.originalname);

    fileStream.write(file.buffer);

    fileStream.end();

    return { message: 'file saved successfully!' };
  }
}

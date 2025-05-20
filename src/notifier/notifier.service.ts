import { Injectable } from '@nestjs/common';
import { CreateNotifierDto } from './dto/create-notifier.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotifierService {
  constructor(private mailerService: MailerService) {}

  async sendSimpleEmail(createNotifierDto: CreateNotifierDto) {
    await this.mailerService.sendMail({
      to: 'createNotifierDto.to',
      from: createNotifierDto.from,
      subject: 'nuevo mensaje de tu compa',
      text: createNotifierDto.message,
    });
    return 'This action adds a new notifier';
  }
}

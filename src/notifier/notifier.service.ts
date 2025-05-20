import { Injectable } from '@nestjs/common';
import { CreateNotifierDto } from './dto/create-notifier.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { envs } from 'src/config';

@Injectable()
export class NotifierService {
  constructor(private mailerService: MailerService) {}

  async sendSimpleEmail(createNotifierDto: CreateNotifierDto) {
    console.log('un mensajito ahi')
    console.log(createNotifierDto)
    await this.mailerService.sendMail({
      to: (createNotifierDto.to.length <= 1 ) ? createNotifierDto.to[0] : createNotifierDto.to,
      from: envs.mailUser,
      subject: 'nuevo mensaje de tu compa',
      text: createNotifierDto.message,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateNotifierDto } from './dto/create-notifier.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { envs } from 'src/config';

@Injectable()
export class NotifierService {
  constructor(private mailerService: MailerService) {}

  async sendSimpleEmail(createNotifierDto: CreateNotifierDto) {
    const urlsHtml = createNotifierDto.urls
      ? createNotifierDto.urls.map(url => `<li><a href="${url}" style="color:#007bff;">${url}</a></li>`).join('')
      : '';

    await this.mailerService.sendMail({
      to: (createNotifierDto.to.length <= 1 ) ? createNotifierDto.to[0] : createNotifierDto.to,
      from: envs.mailUser,
      subject: '🚀 Nuevo mensaje de tu paisano',
      html: `
        <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 24px;">
          <div style="max-width: 500px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 2px 8px #0001; padding: 24px;">
            <h2 style="color: #007bff; margin-top: 0;">¡Tienes un nuevo mensaje! 🎉</h2>
            <p style="font-size: 1.1em; color: #333;">
              <strong>Mensaje:</strong><br>
              ${createNotifierDto.message}
            </p>
            ${(urlsHtml) ? 
              `<ul style="padding-left: 20px; margin: 16px 0 0 0;">
                ${urlsHtml}
              </ul>` : ''}
            <hr style="margin: 24px 0;">
            <p style="font-size: 0.9em; color: #888;">Enviado desde Chat App 🚀</p>
          </div>
        </div>
      `,
    });
  }
}

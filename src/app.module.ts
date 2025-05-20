import { Module } from '@nestjs/common';
import { NotifierModule } from './notifier/notifier.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { envs } from './config';

@Module({
  imports: [
    NotifierModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: envs.mailUser,
          pass: envs.mailPassword,
        },
        tls: {
          rejectUnauthorized: false,
        },
      }
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

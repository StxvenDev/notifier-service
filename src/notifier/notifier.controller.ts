import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NotifierService } from './notifier.service';
import { CreateNotifierDto } from './dto/create-notifier.dto';

@Controller()
export class NotifierController {
  constructor(private readonly notifierService: NotifierService) {}

  @MessagePattern('createNotifier')
  create(@Payload() createNotifierDto: CreateNotifierDto) {
    return this.notifierService.sendSimpleEmail(createNotifierDto);
  }

}

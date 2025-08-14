import { Controller, Post, Body } from '@nestjs/common';
import { QuickEnquiryService } from './quick-enquiry.service';
import { CreateQuickEnquiryDto } from './create-quick-enquiry.dto';

@Controller('quick-enquiry')
export class QuickEnquiryController {
  constructor(private readonly service: QuickEnquiryService) {}

  @Post()
  create(@Body() dto: CreateQuickEnquiryDto) {
    return this.service.create(dto);
  }
}

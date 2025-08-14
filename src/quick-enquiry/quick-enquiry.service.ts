import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuickEnquiry } from './quick-enquiry.entity';
import { CreateQuickEnquiryDto } from './create-quick-enquiry.dto';

@Injectable()
export class QuickEnquiryService {
  constructor(
    @InjectRepository(QuickEnquiry)
    private repo: Repository<QuickEnquiry>
  ) {}

  create(dto: CreateQuickEnquiryDto) {
    const enquiry = this.repo.create(dto);
    return this.repo.save(enquiry);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuickEnquiryService } from './quick-enquiry.service';
import { QuickEnquiryController } from './quick-enquiry.controller';
import { QuickEnquiry } from './quick-enquiry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuickEnquiry]) // ✅ Register repository here
  ],
  controllers: [QuickEnquiryController],
  providers: [QuickEnquiryService],
  exports: [TypeOrmModule] // if other modules also use it
})
export class QuickEnquiryModule {}

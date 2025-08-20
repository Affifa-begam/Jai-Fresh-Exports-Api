// 📁 src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './Contact/contact.module';
import { QuickEnquiryModule } from './quick-enquiry/quick-enquiry.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PWD || 'root',
      database: process.env.DB_NAME || 'contactdb',
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'root',
      // database: 'contactdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
   ContactModule,
QuickEnquiryModule,
  ],
})
export class AppModule {}
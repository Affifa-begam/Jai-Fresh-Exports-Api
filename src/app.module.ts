// 📁 src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './Contact/contact.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'contactdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
   ContactModule,

  ],
})
export class AppModule {}
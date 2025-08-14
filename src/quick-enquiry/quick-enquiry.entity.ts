import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quick_enquiries')
export class QuickEnquiry {
  @PrimaryGeneratedColumn('uuid') // ✅ Generates UUID instead of integer
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  message: string;
}

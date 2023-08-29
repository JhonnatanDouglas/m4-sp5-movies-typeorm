import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export default class Movie {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string | undefined | null;

  @Column()
  duration: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}

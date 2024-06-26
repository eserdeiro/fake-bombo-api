import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './entities/artist.entity';
import { SocialMedia } from './entities/social-media.entity';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
  imports: [
    TypeOrmModule.forFeature([Artist, SocialMedia]),
    CommonModule,
    AuthModule
  ],
  exports: [ArtistsService, TypeOrmModule]
})
export class ArtistsModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewFollowController } from './notifs-follow/new-follow.controller';

@Module({
  imports: [],
  controllers: [AppController, NewFollowController],
  providers: [AppService],
})
export class AppModule {}

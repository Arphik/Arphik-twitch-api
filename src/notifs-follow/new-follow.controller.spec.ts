import { Test, TestingModule } from '@nestjs/testing';
import { NewFollowController } from './new-follow.controller';

describe('NotifsFollowController', () => {
  let controller: NewFollowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewFollowController],
    }).compile();

    controller = module.get<NewFollowController>(NewFollowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { FeishuUserInfo } from './feishu/feishu.dto';
import { User } from './user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: MongoRepository<User>
  ) { }

  createOrSave(user) {
    return this.userRepository.save(user)
  }
  
  async createOrUpdateByFeishu(feishuUserInfo: FeishuUserInfo) {
    return await this.userRepository.save(feishuUserInfo);
  }
}

import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

// 会在model 中添加 createtime 和 updatetime 两个字段
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'username1' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'password1' })
  @prop()
  password: string;
}

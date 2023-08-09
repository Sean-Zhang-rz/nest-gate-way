import { ApiProperty } from '@nestjs/swagger';

export class GitlabToken {
  access_token: string;
}

export class GetTokenByApplications {
  @ApiProperty({ example: 'ad3h805d6cca44e0996028d39226ed64' })
  code: string;
}
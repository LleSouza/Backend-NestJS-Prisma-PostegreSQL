import { Module } from '@nestjs/common';
import { CadastroLoginService } from './cadastro_login.service';
import { CadastroLoginController } from './cadastro_login.controller';
import { PrismaService } from '../database/PrismaService'

@Module({
  controllers: [CadastroLoginController],
  providers: [CadastroLoginService, PrismaService],
})
export class CadastroLoginModule {}

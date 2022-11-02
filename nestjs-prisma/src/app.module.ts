import { Module } from '@nestjs/common';
import { CadastroLoginModule } from './cadastro_login/cadastro_login.module';


@Module({
  imports: [CadastroLoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

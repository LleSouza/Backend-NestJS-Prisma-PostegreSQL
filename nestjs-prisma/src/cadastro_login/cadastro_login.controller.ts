import { Controller,Post, Body,Get,Put, Param, Delete } from '@nestjs/common';
import { CadastroDTO } from './cadastro.dto';
import { CadastroLoginService } from './cadastro_login.service';

// Aqui é criado as rotas, nesse exemplo existe apenas uma URL chamada "cadastro-login"
@Controller('cadastro-login')
export class CadastroLoginController {
  constructor(private readonly cadastroLoginService: CadastroLoginService) {}

  // Criando a rota Post ( cadastrar usuário)
  @Post() 
  async create(@Body()data: CadastroDTO){
    return this.cadastroLoginService.create(data);
  }

  // Criando a rota Get(buscar usuários)
  @Get()
  async findAll(){
    return this.cadastroLoginService.findAll();
  }

  // Criando a rota Put(atualizar usuário)
@Put(':id')
async update(@Param('id') id: string, @Body() data: CadastroDTO){
  return this.cadastroLoginService.update(id,data);
 }

 // Criando a rota Delete(excluir usuário)
 @Delete('id')
 async delete(@Param('id') id: string){
  return this.cadastroLoginService.delete(id);
 }
}




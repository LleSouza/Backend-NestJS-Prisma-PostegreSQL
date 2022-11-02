import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/PrismaService';
import { CadastroDTO } from './cadastro.dto';

@Injectable()
export class CadastroLoginService {
    
    constructor(private prisma: PrismaService){}
    
    async create(data: CadastroDTO) {
        // verificando se existe um email do  usuário cadastrado no banco de dados
        const cadastroExists = await this.prisma.cadastro.findFirst({
            where: {
                email: data.email
            }
        })
        
        // Se existir um email cadastrado essa mensagem é exibida para o usuário
        if(cadastroExists){
            throw new Error("Email já existente , cadastre outro email !!!");
        }
        return {erro: "Email já cadastrado"}

        // Criando um cadastro para o usuário
        const cadastro =  await this.prisma.cadastro.create({
           data, 
        });
        return cadastro;
     }

    
     // Fazendo a busca de todos usuários cadastrados
     async findAll(){
        return this.prisma.cadastro.findMany();
     }
     
     // Atualizando o cadastro do  usuário 
    async update(id: string, data: CadastroDTO){
        const cadastroExists = await this.prisma.cadastro.findUnique({
            where:{
                id,
            },
        });

        if(!cadastroExists){
            throw new Error('Usuário não cadastrado!');
        }

        return await this.prisma.cadastro.update({
            data,
            where:{
                id,
            },
        });
    }

    // Deletando o cadastro dp usuário
    async delete(id: string){
      const cadastroExists = await this.prisma.cadastro.findUnique({
        where:{
            id,
        },
    });

    if(!cadastroExists){
        throw new Error('Usuário não cadastrado!');
    }
   
    return await this.prisma.cadastro.delete({
        where: {
            id,
        },
    });
    
    }
}

import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserRepository } from '../user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private readonly logger = new Logger(PrismaUserRepository.name);

  async findAll(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany({
        where: { deleted: false },
        orderBy: { created_at: 'desc' },
      });
    } catch (error) {
      this.logger.error('create');
      console.log(error);
      throw new InternalServerErrorException(
        'Não foi possível realizar a busca por usuário',
      );
    }
  }

  async create(data: User): Promise<User> {
    try {
      const { cpf, email } = data;
      const user = await this.prisma.user.findFirst({
        where: {
          AND: [{ deleted: false }, { OR: [{ cpf }, { email }] }],
        },
      });

      if (user) throw new UnprocessableEntityException('Usuário já cadastrado');

      return await this.prisma.user.create({ data });
    } catch (error) {
      this.logger.error('create');
      console.log(error);

      if (error?.status && error?.status == 422) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Não foi possível cadastrar o usuário.',
      );
    }
  }

  async update(obj: User): Promise<User> {
    try {
      const { id, ...data } = obj;

      return await this.prisma.user.update({ where: { id }, data });
    } catch (error) {
      this.logger.error('update');
      console.log(error);
      throw new InternalServerErrorException(
        'Não foi possível atualizar o usuário.',
      );
    }
  }

  async delete(id: string): Promise<Partial<User>> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id },
      });

      if (!user)
        throw new UnprocessableEntityException('Usuário não encontrado');

      if (user.deleted) return { id };

      await this.prisma.user.update({
        where: { id },
        data: { deleted: true },
      });

      return { id };
    } catch (error) {
      this.logger.error('delete');
      console.log(error);

      if (error?.status && error?.status == 422) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Não foi possível deletar o usuário.',
      );
    }
  }
}

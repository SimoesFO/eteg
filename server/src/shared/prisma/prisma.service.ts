import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    this.middlewareUser();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async middlewareUser() {
    this.$use(async (params, next) => {
      if (params.model === 'User') {
        if (params.action === 'create') {
          delete params.args.data['id'];
          delete params.args.data['created_at'];
          delete params.args.data['updated_at'];
          delete params.args.data['deleted_at'];
        }

        if (params.action === 'update') {
          delete params.args.data['id'];
          delete params.args.data['created_at'];
          delete params.args.data['updated_at'];
        }
      }

      return next(params);
    });
  }
}

import { InestApplication, Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {}

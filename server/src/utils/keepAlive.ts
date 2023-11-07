import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


setInterval(async () => console.log(prisma.tempo.findFirst({ where: { name: 'prisma' } })), 2000 * 60);

const dbAlive = async () => await prisma.tempo.create({ data: { name: 'prisma' } });


export default dbAlive;
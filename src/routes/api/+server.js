import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    var tests = await prisma.Test.findMany();
    return new Response(JSON.stringify(tests));
}
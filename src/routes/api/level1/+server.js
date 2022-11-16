import prisma from '../prisma'

export async function GET() {
    var objects = await prisma.Obj1.findMany({
        select: {
            name1: true,
        }
    });
    return new Response(JSON.stringify(objects));
}
import prisma from '../prisma'

export async function GET() {
    var objects = await prisma.Obj1.findMany({
        select: {
            name1: true,
            Obj2: {
                select: {
                    name2: true,
                    Obj3: {
                        select: {
                            name3: true,
                            Obj4: {
                                select: {
                                    name4: true,
                                    Obj5: {
                                        select: {
                                            name5: true,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    return new Response(JSON.stringify(objects));
}
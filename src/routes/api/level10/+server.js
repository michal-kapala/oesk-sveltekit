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
                                            Obj6: {
                                                select: {
                                                    name6: true,
                                                    Obj7: {
                                                        select: {
                                                            name7: true,
                                                            Obj8: {
                                                                select: {
                                                                    name8: true,
                                                                    Obj9: {
                                                                        select: {
                                                                            name9: true,
                                                                            Obj10: {
                                                                                select: {
                                                                                    name10: true,
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
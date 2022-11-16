import { PrismaClient } from '@prisma/client'
import md5 from 'js-md5';

const prisma = new PrismaClient();

export async function GET() {
    var obj1 = null;
    var obj2 = null;
    var obj3 = null;
    var obj4 = null;
    var obj5 = null;
    var obj6 = null;
    var obj7 = null;
    var obj8 = null;
    var obj9 = null;
    var obj10 = null;

    // for(var i = 1; i<=1000; i++) {
    //     obj1 = {
    //         name1: md5(`${i}`),
    //         id_obj2: i,
    //     };
    //     const result = await prisma.Obj1.create({data: obj1});
    // }

    return new Response(JSON.stringify(obj1));
}
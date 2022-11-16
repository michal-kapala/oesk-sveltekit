import prisma from '../prisma'
import md5 from 'js-md5';

// Call api/populate to insert 1k records
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

    // populates 1 table at a time (swap names to change)
    for(var i = 1; i<=1000; i++) {
        obj1 = {
            name1: md5(`${i + Date.now()}`),
            id_obj2: i,
        };
        await prisma.Obj1.create({data: obj1});
    }
    
    // returns the last inserted object
    return new Response(JSON.stringify(obj1));
}
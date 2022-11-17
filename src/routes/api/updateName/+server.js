import prisma from '../prisma'
import md5 from 'js-md5';

// Call api/populate to insert 1k records
export async function PUT() {
    // gets random id to update the object name for
    const rng = Math.floor(Math.random() * 999) + 1;
    // generate a new name
    const newName = md5(`${rng + Date.now()}`);

    // update random table
    let obj;
    switch (rng % 10) {
        case 0:
            obj = await prisma.Obj1.update({
                where: {
                    id: rng,
                },
                data: {
                    name1: newName
                },
            });
            break;
        case 1:
            obj = await prisma.Obj2.update({
                where: {
                    id: rng,
                },
                data: {
                    name2: newName
                },
            });
            break;
        case 2:
            obj = await prisma.Obj3.update({
                where: {
                    id: rng,
                },
                data: {
                    name3: newName
                },
            });
            break;
        case 3:
            obj = await prisma.Obj4.update({
                where: {
                    id: rng,
                },
                data: {
                    name4: newName
                },
            });
            break;
        case 4:
            obj = await prisma.Obj5.update({
                where: {
                    id: rng,
                },
                data: {
                    name5: newName
                },
            });
            break;
        case 5:
            obj = await prisma.Obj6.update({
                where: {
                    id: rng,
                },
                data: {
                    name6: newName
                },
            });
            break;
        case 6:
            obj = await prisma.Obj7.update({
                where: {
                    id: rng,
                },
                data: {
                    name7: newName
                },
            });
            break;
        case 7:
            obj = await prisma.Obj8.update({
                where: {
                    id: rng,
                },
                data: {
                    name8: newName
                },
            });
            break;
        case 8:
            obj = await prisma.Obj9.update({
                where: {
                    id: rng,
                },
                data: {
                    name9: newName
                },
            });
            break;
        case 9:
            obj = await prisma.Obj10.update({
                where: {
                    id: rng,
                },
                data: {
                    name10: newName
                },
            });
            break;
    }
    
    // returns the new name in GQL format
    return new Response(JSON.stringify({
        data: { 
            updateName: newName
        }
    }));
}
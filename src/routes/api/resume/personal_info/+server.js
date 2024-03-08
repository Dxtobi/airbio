import { json } from '@sveltejs/kit'



export async function PUT({ ...others }) {

    try {
        const data = await others.request.json()
        const id = data.id;

        //  let data = { name, user: others.locals.user.id }



        console.log(data, id)
        const rtn = await others.locals.pb.collection('resumes').update(id, { ...data });
        // //others.locals.pb.collection('users').requestVerification(data.email)
        // // console.log(rtn)
        return json({
            susses: true,
            error: false,
            message: 'resume updated',
            data: rtn
        })

    } catch (error) {
        console.log(error.message);
        return json({
            susses: false,
            error: true,
            message: error.message,
            data: undefined
        })
    }
}



export async function DELETE({ ...others }) {

    try {
        const id = await others.request.json()



        console.log(id)
        await others.locals.pb.collection('resumes').delete(id);
        //others.locals.pb.collection('users').requestVerification(data.email)
        const rtn = await others.locals.pb.collection('resumes').getList(1, 30, {
            sort: '-created',
        });
        //console.log(rtn.items)
        return json({
            susses: true,
            error: false,
            message: 'resume added',
            data: rtn.items
        })



    } catch (error) {
        console.log(error);
        return json({
            susses: false,
            error: true,
            message: error.message,
            data: error
        })
    }
}
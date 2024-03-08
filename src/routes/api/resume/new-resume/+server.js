import { json } from '@sveltejs/kit'



export async function POST({ ...others }) {

    try {
        const name = await others.request.json()

        let data = { name, user: others.locals.user.id }



        console.log(data,)
        const rtn = await others.locals.pb.collection('resumes').create({ ...data })
        //others.locals.pb.collection('users').requestVerification(data.email)
        // console.log(rtn)
        return json({
            susses: true,
            error: false,
            message: 'resume added',
            data: rtn
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



export async function DELETE({ ...others }) {

    try {
        const id = await others.request.json()



        console.log(id)
        await others.locals.pb.collection('resumes').delete(id);
        //others.locals.pb.collection('users').requestVerification(data.email)

        //console.log(rtn.items)
        return json({
            susses: true,
            error: false,
            message: 'resume added',
            // data: rtn.items
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
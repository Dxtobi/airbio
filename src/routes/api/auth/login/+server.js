import { json } from '@sveltejs/kit'



export async function PUT({ ...others }) {

    try {
        const data = await others.request.json()
        //console.log(data, others.request.locals)

        await others.locals.pb.collection('users').authWithPassword(data.email, data.password);

        //others.locals.pb.collection('users').requestVerification(data.email)

        // console.log(mires)
        return json({
            susses: true,
            error: false,
            message: 'sussesfuly logged in',
            data: undefined
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
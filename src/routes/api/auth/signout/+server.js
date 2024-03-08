import { json } from '@sveltejs/kit'




export async function GET({ ...others }) {

    try {

        await others.locals.pb.authStore.clear();
        //others.locals.pb.collection('users').requestVerification(data.email)
        return json({
            susses: true,
            error: false,
            message: 'sussesfuly signed out',
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
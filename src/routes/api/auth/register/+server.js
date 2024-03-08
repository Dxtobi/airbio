import { json } from '@sveltejs/kit'
import { generate_user_name } from '../../../../lib/utils/helpers.utils.js'



export async function POST({ ...others }) {

    try {
        const data = await others.request.json()
        //   console.log(data, others.request.locals)
        let username = generate_user_name(data.name.split(' ').join('').toLowerCase())
        await others.locals.pb.collection('users').create({ username, ...data })
        //others.locals.pb.collection('users').requestVerification(data.email)
        return json({
            susses: true,
            error: false,
            message: 'sussesfuly registered',
            data: undefined
        })

    } catch (error) {
        // console.log(error);
        return json({
            susses: false,
            error: true,
            message: error.message,
            data: error
        })
    }
}
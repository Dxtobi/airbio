import { json } from '@sveltejs/kit'



export async function PUT({ ...others }) {

    try {
        const data = await others.request.json()
        const id = data.id;
        const main_data = { more_details: data.content }
        const collection = data.collection

        //  let data = { name, user: others.locals.user.id }
        if (collection === 'summary') {
            console.log('-summ------------------------------')
            console.log(id, collection)
            console.log('-------------------------------')
            const rtn = await others.locals.pb.collection('resumes').update(id, { summary: data.content });
            console.log(rtn)
            return json({
                susses: true,
                error: false,
                message: 'resume updated',
                data: rtn
            })
        } else {
            console.log('-------------------------------')
            console.log(id, main_data, collection)
            console.log('-------------------------------')
            const rtn = await others.locals.pb.collection(collection).update(id, { ...main_data });
            // //others.locals.pb.collection('users').requestVerification(data.email)
            // // console.log(rtn)

            return json({
                susses: true,
                error: false,
                message: 'resume updated',
                data: rtn
            })
        }


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




import { json } from '@sveltejs/kit'



export async function PUT({ ...others }) {

    try {
        const data = await others.request.json()



        console.log(data)
        if (data.new_) {
            const rtn = await others.locals.pb.collection('experience').create({ ...data, user: others.locals.user.id });
            const updated = { experience: [rtn.id, ...data.experience] }
            await others.locals.pb.collection('resumes').update(data.resume, updated)
            // // console.log(rtn)
            return json({
                susses: true,
                error: false,
                message: 'Experience added',
                data: rtn
            })
        } else {
            const updated = { experience: [data.id, ...data.experience] }
            await others.locals.pb.collection('resumes').update(data.resume, updated)
            // // console.log(rtn)
            return json({
                susses: true,
                error: false,
                message: 'Experience added',

            })
        }


    } catch (error) {
        console.log(error.message);
        return json({
            susses: false,
            error: true,
            message: `s:e >> ${error.message}`,
            data: undefined
        })
    }
}



export async function DELETE({ ...others }) {

    try {
        const id = await others.request.json()



        console.log(id)
        await others.locals.pb.collection('experience').delete(id);
        //others.locals.pb.collection('users').requestVerification(data.email)

        //console.log(rtn.items)
        return json({
            susses: true,
            error: false,
            message: 'experience removed',
            data: undefined
        })



    } catch (error) {
        console.log(error);
        return json({
            susses: false,
            error: true,
            message: `s:e >> ${error.message}`,
            data: error
        })
    }
}
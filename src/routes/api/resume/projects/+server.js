import { json } from '@sveltejs/kit'



export async function PUT({ ...others }) {

    try {
        const data = await others.request.json()


        if (data.new_) {
            // console.log(data)
            const rtn = await others.locals.pb.collection('projects').create({ ...data, user: others.locals.user.id });
            const updated = { projects: [rtn.id, ...data.projects] }
            await others.locals.pb.collection('resumes').update(data.resume, updated)
            // // console.log(rtn)
            return json({
                susses: true,
                error: false,
                message: 'projects added',
                data: rtn
            })
        } else {
            // console.log(data)

            const updated = { projects: [data.id, ...data.projects] }
            await others.locals.pb.collection('resumes').update(data.resume, updated)
            // // console.log(rtn)
            return json({
                susses: true,
                error: false,
                message: 'projects added',

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
        await others.locals.pb.collection('projects').delete(id);
        //others.locals.pb.collection('users').requestVerification(data.email)

        //console.log(rtn.items)
        return json({
            susses: true,
            error: false,
            message: 'projects removed',
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
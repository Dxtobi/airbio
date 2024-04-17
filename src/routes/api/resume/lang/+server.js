import { json } from '@sveltejs/kit'


export async function PUT({ ...others }) {
    try {
        const data = await others.request.json()
        if (data.new_) {
            console.log(data)
            const rtn = await others.locals.pb.collection('language').create({ ...data, user: others.locals.user.id });
            const updated = { languages: [rtn.id, ...data.languages] }
            await others.locals.pb.collection('resumes').update(data.resume, updated)
            // // console.log(rtn)
            return json({
                susses: true,
                error: false,
                message: 'language added',
                data: rtn
            })

        } else {
            const updated = { languages: [data.id, ...data.languages] }
            await others.locals.pb.collection('resumes').update(data.resume, updated)
            // // console.log(rtn)
            return json({
                susses: true,
                error: false,
                message: 'language added',
            })
        }
    } catch (error) {
        console.log(error.message);
        return json({
            susses: false,
            error: true,
            message: `s:e >>  ${error.message}`,
            data: undefined
        })
    }
}



export async function DELETE({ ...others }) {

    try {
        const id = await others.request.json()
        console.log(id)
        await others.locals.pb.collection('language').delete(id);
        //others.locals.pb.collection('users').requestVerification(data.email)
        //console.log(rtn.items)
        return json({
            susses: true,
            error: false,
            message: 'language removed',
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
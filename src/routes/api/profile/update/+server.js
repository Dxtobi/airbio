import { json } from '@sveltejs/kit'



export async function PUT({ ...others }) {

    try {
        const data = await others.request.json()
        // const id = data.id;
        const main_data = { ...data.data, user: others.locals.user.id }
        const collection = data.collection

        console.log(main_data, collection)
        const rtn = await others.locals.pb.collection(collection).create(main_data);
        //const other_data = [...data.data, rtn.id]
        //
        //await pb.collection('users').update(others.locals.user.id, { skills });
        //others.locals.pb.collection('users').requestVerification(data.email)
        // console.log(rtn)
        console.log('-------------------------------')
        console.log(rtn)
        console.log('-------------------------------')
        return json({
            susses: true,
            error: false,
            message: collection + ' updated',
            data: rtn
        })

    } catch (error) {
        console.log(error.message, error.data);
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
        const data = await others.request.json()

        const id = data.id
        const collection = data.collection

        console.log(id)
        await others.locals.pb.collection(collection).delete(id);
        //others.locals.pb.collection('users').requestVerification(data.email)

        //console.log(rtn.items)
        return json({
            susses: true,
            error: false,
            message: collection + ' updated: delete',
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
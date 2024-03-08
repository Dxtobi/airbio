import { redirect } from '@sveltejs/kit';
import { serializeObj } from '../../lib/utils/helpers.utils.js';


export const load = async ({ locals }) => {

    if (!locals.user) {
        redirect(303, '/')
    }

    try {

        const data = await locals.pb.collection('resumes').getList(1, 30, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,
            expand: "user",
        });
        //  console.log(data, locals.user.id)

        return {
            data: data.items// serializeObj(data)
        };
    } catch (error) {


        console.log(error)
        return {
            data: []
        }
    }
}
import { redirect } from '@sveltejs/kit';
import { serializeObj } from '../../lib/utils/helpers.utils.js';


export const load = async ({ locals }) => {

    if (!locals.user) {
        redirect(303, '/')
    }

    // console.log(locals.user.id)
    try {

        const resume = await locals.pb.collection('resumes').getList(1, 30, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,
            // expand: "user",
        });
        const skills = await locals.pb.collection('skill').getList(1, 10, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,
            // expand: "user",
        });
        const projects = await locals.pb.collection('projects').getList(1, 5, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,
            // expand: "user",
        });
        const experience = await locals.pb.collection('experience').getList(1, 5, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,

        });

        const education = await locals.pb.collection('education').getList(1, 3, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,

        });

        const certificates = await locals.pb.collection('certificate').getList(1, 5, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,

        });

        const language = await locals.pb.collection('language').getList(1, 3, {
            sort: '-created',
            filter: `user.id = '${locals.user.id}'`,

        });


        // const profile = await locals.pb.collection('profile').getFirstListItem(`user.id="${locals.user.id}"`, {

        //     expand: 'certificate, skill, projects, experience, education, language'

        // });
        //  console.log(data, locals.user.id)

        return {
            resume,
            language,
            certificates,
            experience,
            education,
            projects,
            skills


        };
    } catch (error) {


        console.log(error)
        return {
            // data: [],
            error: true,
            message: serializeObj(error.message)
        }
    }
}
export const load = async ({ locals, params }) => {
    const { id } = params;
    // console.log(id, '--')
    const resume = await locals.pb.collection('resumes').getOne(id, {
        expand: 'experience, education, skills, languages, projects, certificates',
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
    // const exp =
    if (resume) {
        return {

            resume: resume,
            language,
            certificates,
            experience,
            education,
            projects,
            skills
        }
    } else {
        return {

            resume: undefined
        }
    }
}
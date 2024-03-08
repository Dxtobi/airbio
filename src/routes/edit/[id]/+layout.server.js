export const load = async ({ locals, params }) => {
    const { id } = params;
    // console.log(id, '--')
    const resume = await locals.pb.collection('resumes').getOne(id, {
        expand: 'experience, education, skills, languages, projects, certificates',
    });
    // const exp =
    if (resume) {
        return {

            resume: resume
        }
    } else {
        return {

            resume: undefined
        }
    }
}
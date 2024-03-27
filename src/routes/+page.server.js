// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const load = async ({ locals }) => {


    const resumes = await locals.pb.collection('resumes').getList();
    const users = await locals.pb.collection('users').getList();


    //would come back to this.

    return {
        counts: {
            users: users?.totalItems,
            resumes: resumes?.totalItems,
        }
    }
}
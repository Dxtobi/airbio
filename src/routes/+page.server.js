// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const load = async ({ locals }) => {

    // const users = await locals.pb.collection('user').getList();
    // const resumes = await locals.pb.collection('resumes').getList();
    // const users = await locals.pb.collection('users').getList();


    //would come back to this.

    return {
        counts: {
            users: 8,//users?.totalItems,
            resumes: 7// resumes?.totalItems,
        }
    }
}
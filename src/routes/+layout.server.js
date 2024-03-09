export const load = async ({ locals }) => {
    if (await locals.user) {
        return {
            user: locals.user
        }
    } else {
        return {
            user: undefined
        }
    }
}
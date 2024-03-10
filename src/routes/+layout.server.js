
export const load = async ({ locals }) => {
    if (!locals.user) {
        return {
            user: undefined
        }
    } else {
        return {
            user: locals.user
        }
    }

}
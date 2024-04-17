
import { invalidateAll } from '$app/navigation';



//EXPERIENCE
export async function update_record(collection, data) {
    // console.log(experience_details)
    try {
        const res = await fetch('/api/profile/update', {
            method: 'PUT',
            body: JSON.stringify({ collection, data }),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {
        console.error(error);
        return def_error
    }
}
export async function delete_record(collection, id) {
    console.log(id)
    const data = { collection, id }
    try {
        const res = await fetch('/api/profile/update', {
            method: 'DELETE',
            body: JSON.stringify(data),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {

        console.error(error);
        return def_error
    }


}

const def_error = {
    susses: false,
    error: true,
    message: 'this error is from the client',
    data: undefined
}
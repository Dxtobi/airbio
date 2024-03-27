import { invalidateAll } from '$app/navigation';


export async function update_resume(collection, content, id) {
    const data = {
        collection: collection,
        content: content,
        id: id
    }
    try {
        const res = await fetch('/api/resume/update', {
            method: 'PUT',
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
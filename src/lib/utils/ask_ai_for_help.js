

export async function improve_with_ai(content, options) {

    try {
        const res = await fetch('/api/ai', {
            method: 'PUT',
            body: JSON.stringify({ content: content, options: options }),
        });
        const resp = await res.json();
        // await invalidateAll()
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
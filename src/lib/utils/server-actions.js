
import { invalidateAll } from '$app/navigation';

export async function submit_form_PI(personal_details) {

    try {
        const res = await fetch('/api/resume/personal_info', {
            method: 'PUT',
            body: JSON.stringify({ ...personal_details }),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {

        console.error(error);
        return def_error

    }
}
//EXPERIENCE
export async function submit_form_exp(experience_details) {
    // console.log(experience_details)
    try {
        const res = await fetch('/api/resume/experience', {
            method: 'PUT',
            body: JSON.stringify(experience_details),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {

        console.error(error);
        return def_error
    }


}
export async function delete_exp(id) {
    console.log(id)
    try {
        const res = await fetch('/api/resume/experience', {
            method: 'DELETE',
            body: JSON.stringify(id),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {

        console.error(error);
        return def_error
    }


}




//EDUCATION
export async function submit_form_edu(experience_details) {
    // console.log(experience_details)
    try {
        const res = await fetch('/api/resume/edu', {
            method: 'PUT',
            body: JSON.stringify(experience_details),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {

        console.error(error);
        return def_error
    }


}
export async function delete_edu(id) {
    console.log(id)
    try {
        const res = await fetch('/api/resume/edu', {
            method: 'DELETE',
            body: JSON.stringify(id),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {

        console.error(error);
        return def_error
    }


}

//SKILLS
export async function submit_form_skills(data) {
    // console.log(experience_details)
    try {
        const res = await fetch('/api/resume/skills', {
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
export async function delete_skill(id) {
    console.log(id)
    try {
        const res = await fetch('/api/resume/skills', {
            method: 'DELETE',
            body: JSON.stringify(id),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {

        console.error(error);
        return def_error
    }
}


//LANGUAGE
export async function submit_form_lang(data) {
    try {
        const res = await fetch('/api/resume/lang', {
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

export async function delete_lang(id) {
    console.log(id)
    try {
        const res = await fetch('/api/resume/lang', {
            method: 'DELETE',
            body: JSON.stringify(id),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {
        console.error(error);
        return def_error
    }
}



//PROJECT
export async function submit_form_project(data) {
    try {
        const res = await fetch('/api/resume/projects', {
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

export async function delete_project(id) {
    console.log(id)
    try {
        const res = await fetch('/api/resume/projects', {
            method: 'DELETE',
            body: JSON.stringify(id),
        });
        const resp = await res.json();
        await invalidateAll()
        return resp
    } catch (error) {
        console.error(error);
        return def_error
    }
}



//CERTIFICATE
export async function submit_form_cert(data) {
    try {
        const res = await fetch('/api/resume/certificate', {
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

export async function delete_cert(id) {
    //  console.log(id)
    try {
        const res = await fetch('/api/resume/certificate', {
            method: 'DELETE',
            body: JSON.stringify(id),
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
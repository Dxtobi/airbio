import Pocketbase from 'pocketbase'
import { serializeObj } from './lib/utils/helpers.utils';
import { DATA_BASE_URL } from '$env/static/private';

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new Pocketbase(DATA_BASE_URL ?? 'http://127.0.0.1:8090')
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');


    if (event.locals.pb.authStore.isValid) {
        // console.log('called')
        event.locals.user = serializeObj(event.locals.pb.authStore.model)
    } else {
        // console.log('empty')
        event.locals.user = undefined
    }

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true }))
    //console.log(event.locals.pb.authStore.isValid, event.locals.user)

    return response
}   
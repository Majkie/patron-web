import axios from 'axios';

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    try {
        const response = await axios.post('http://patron.test/api/auth/register', body)

        setCookie(event, 'api_token', response.data.meta.token, {
            maxAge: 60 * 60 * 24 * 14,
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
        })
        
        if (response.status === 201) {
            return {
                status: 201,
                user: response.data.data,
                token: response.data.meta.token,
            }
        }
    } catch (err) {
        return {
            status: err.response.status,
            body: err.response.data
        }
    }    

    return {
        status: 500,
        body: {
            message: 'Something went wrong'
        }
    };
})
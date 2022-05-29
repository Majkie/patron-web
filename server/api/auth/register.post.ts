import axios from 'axios';

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    try {
        const response = await axios.post('http://localhost:8000/auth/register', body)

        setCookie(event, 'api_token', response.data.access_token, {
            maxAge: 30 * 24 * 60 * 60,
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            path: '/',
        })
        
        if (response.status === 201) {
            return {
                status: 201,
                user: response.data.user,
                token: response.data.access_token,
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
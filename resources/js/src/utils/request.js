import axios from 'axios'

const service = axios.create({
    // You can add your headers here
    // ================================
    // baseURL: 'https://some-domain.com/api/',

    baseURL: import.meta.env.VITE_APP_URL,
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// ℹ️ Add response interceptor to handle 401 response
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        return response
    },
    error => {
        // Handle error
        if (error?.response?.status === 401) {
            // ℹ️ Logout user and redirect to login page
            // Remove "userData" from localStorage
            console.log({ code: 401, status: 'Unauthorized' })
        } else {
            return Promise.reject(error)
        }
    }
)

export default service


/*import { API_BASE_URL } from '$env/static/public';

export const createClient = () => {
    return {
        get: async (url) => {
            const response = await fetch(`${API_BASE_URL}${url}`);
            return handleResponse(response);
        },
        post: async (url, data) => {  }
    };
};

const handleResponse = async (response) => {
    if (!response.ok) throw new Error(await response.text());
    return response.json();
};
*/
 const getApiUrl = async ()  => {
     try {
         const response = await fetch('https://api.themoviedb.org/3/movie/11');
         if (response.ok)
            console.log('Response:', response);
         const data = await response.json();
         return data.url;
     }
        catch (error) {
            console.error('Error fetching API URL:', error);
            throw error;
        }
 }

 getApiUrl();


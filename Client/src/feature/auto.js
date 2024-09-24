import tokenService from "../services/tokenService";

const tokenNew = ()=>{
    http.interceptors.request.use(async (config) => {
        const accessToken = tokenService.getAccessToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    
    http.interceptors.response.use(response => response, async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await tokenService.refreshToken();
                http.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                console.log(newAccessToken);
                
                return http(originalRequest);
            } catch (refreshError) {
                console.error('Không thể làm mới token:', refreshError);
                return Promise.reject(refreshError);
            }
        }
    
        return Promise.reject(error);
    });
}
export default tokenNew
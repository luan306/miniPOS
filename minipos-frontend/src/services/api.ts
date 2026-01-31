import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
  withCredentials: true,
  timeout: 10000,
});

// Mọi request sẽ đi qua đoạn mã này trước khi được gửi đi
api.interceptors.request.use((config)=>{ 
    const token = "";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
api.interceptors.response.use(
    (Response) => Response,
    async error => {
        if (error.response?.status === 401) {
            // Xử lý khi nhận được lỗi 401 Unauthorized
            console.log("Unauthorized! Redirecting to login...");
            // Ví dụ: Chuyển hướng người dùng đến trang đăng nhập
            window.location.href = "/login";
        }
        return Promise.reject(error);
    });


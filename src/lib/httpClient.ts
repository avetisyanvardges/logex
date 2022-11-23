import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { API_HOST } from "constants/globals";
import Account from "lib/account";

const httpClient = axios.create({
    baseURL: `${API_HOST}/api`,
});

httpClient.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {

    const accessToken = Account.getAccessToken();
    if (accessToken && config.headers) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

httpClient.interceptors.response.use(

    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError): Promise<AxiosError> => {
        if (error.response && error.response.status === 401) {
            Account.delete();
        }
        return Promise.reject(error)
    }
);

export default httpClient;
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

/**
 * @class RestApi
 * @description This class is a wrapper for axios
 * @param {string} baseURL - The base URL for the API
 * @param {object} headers - The headers for the API
 * @returns {object} - An object with the methods get, post, put and delete
 */
class RestApi {
  private readonly axiosConfig: AxiosRequestConfig = {};

  constructor(baseURL: string = "") {
    this.axiosConfig.baseURL = baseURL;
  }

  /**
   * @method get
   * @description This method is a wrapper for axios.get
   * @param {string} url - The URL for the API
   * @returns {object} - An object with the data from the API
   * @memberof RestApi
   */
  public async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.get<T>(
      url,
      this.axiosConfig
    );
    return response.data;
  }

  /**
   * @method post
   * @description This method is a wrapper for axios.post
   * @param {string} url - The URL for the API
   * @param {object} data - The data to be sent to the API
   * @returns {object} - An object with the data from the API
   */
  public async post<T, U>(url: string, data: T): Promise<U> {
    const response: AxiosResponse<U> = await axios.post<U>(
      url,
      data,
      this.axiosConfig
    );
    return response.data;
  }

  /**
   * @method put
   * @description This method is a wrapper for axios.put
   * @param {string} url - The URL for the API
   * @param {object} data - The data to be sent to the API
   * @returns {object} - An object with the data from the API
   */
  public async put<T, U>(url: string, data: T): Promise<U> {
    const response: AxiosResponse<U> = await axios.put<U>(
      url,
      data,
      this.axiosConfig
    );
    return response.data;
  }

  /**
   * @method delete
   * @description This method is a wrapper for axios.delete
   * @param {string} url - The URL for the API
   * @returns {object} - An object with the data from the API
   */
  public async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await axios.delete<T>(
      url,
      this.axiosConfig
    );
    return response.data;
  }
}

export default new RestApi("");

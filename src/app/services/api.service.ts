import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  __base_url = API_URL
  constructor(private http: HttpClient) { }

  post_api_service(path: string, payload: any) {
    console.log("path",path);
    console.log('payload',payload);
    
    
    return this.http.post(`${this.__base_url}/${path}`, payload)
  }

  get_by_id_api_service(path: string, id: string | number) {
    return this.http.get(`${this.__base_url}/${path}/${id}`)
  }

  get_all_api_service(path: string) {
    return this.http.get(`${this.__base_url}/${path}`)
  }

  put_api_service(path: string, id: string | number, payload: any) {
    return this.http.put(`${this.__base_url}/${path}/${id}`, payload)
  }

  delete_api_service(path: string, id: string | number) {
    return this.http.delete(`${this.__base_url}/${path}/${id}`)
  }

}

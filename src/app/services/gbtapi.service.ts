import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GbtapiService {
  private baseUrl ="https://doctor-ia-api.onrender.com;
  constructor(private HttpClient:HttpClient) { }

  getChat(message:any):any
  {
      console.log("message : ",message)
      const searchUrl=`${this.baseUrl}/chat`;
      return this.HttpClient.post<any>(searchUrl,message );
  }

}

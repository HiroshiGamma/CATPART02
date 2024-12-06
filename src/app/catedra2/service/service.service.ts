import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ResponseAPIUser } from '../interface/responseApiUser';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl: string = 'http://localhost:5091';
  public errors: string[] = [];
  private http = inject(HttpClient);

  async postData(data: any): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.http.post<any>(`${this.apiUrl}/api/User`, data)
      );
      return Promise.resolve(response);
    } catch (error) {
      console.error('Error in postData', error);
      if (error instanceof HttpErrorResponse) {
        const errorMessage =
          typeof error.error === 'string' ? error.error : error.message;
        this.errors.push(errorMessage);
      }
      return Promise.reject(error);
    }
  }

  async getAllUsers(): Promise<ResponseAPIUser[]> {
    try {
      const response = await firstValueFrom(
        this.http.get<ResponseAPIUser[]>(`${this.apiUrl}/api/User/all`)
      );
      return Promise.resolve(response);
    } catch (error) {
      console.error('Error fetching users', error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }
}

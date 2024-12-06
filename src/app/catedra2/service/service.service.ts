import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ResponseAPIUser } from '../interface/responseApiUser';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl: string = 'http://localhost:5091/api/User';
  private apiUrlAllUsers: string = 'http://localhost:5091/api/User/all';
  public errors: string[] = [];
  private http = inject(HttpClient);

  async postData(user: any): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    try {
      const response = await firstValueFrom(
        this.http.post<any>(this.apiUrl, JSON.stringify(user), { headers })
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
        this.http.get<ResponseAPIUser[]>(this.apiUrlAllUsers)
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

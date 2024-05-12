import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$ = new BehaviorSubject<any>(null);
  userList$ = new BehaviorSubject<any>(null);

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(page: number = 1) {
    const url = `${this.apiUrl}?page=${page}`;
    this.http.get<User[]>(url)
    .subscribe((data: any) => {
      this.userList$.next([...data.data]);

    })
  }

  getUser(id: string) {
    const url = `${this.apiUrl}/${id}`;
    this.http.get<any>(url)
    .subscribe((data: any) => {
      if (data && data?.data) {
        if(id){
          this.userList$.next([data.data]);
        }
        else{
          this.userList$.next([...data.data]);
        }

      }
    })
  }

  get userList() {
    return this.userList$.asObservable()
  }


}

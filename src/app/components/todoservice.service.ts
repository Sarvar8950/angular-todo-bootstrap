import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  constructor(private http: HttpClient) {}

  gettodos(): Observable<any> {
    return this.http.get<any>(`http://localhost:3001/todos`);
  }
  addtodos(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3001/todos`, data);
    // this.gettodos().subscribe();
  }
  deletetodos(id: any) {
    this.http.delete(`http://localhost:3001/todos/${id}`).subscribe();
    this.gettodos().subscribe();
  }
  updatetodos(todo: any) {
    this.http.put(`http://localhost:3001/todos/${todo.id}`, todo).subscribe();
    this.gettodos().subscribe();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Todo } from '../../models';

/**
 * Service
 */
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseUrl =
    'https://us-central1-todo-api-4119c.cloudfunctions.net/v1';

  constructor(private http: HttpClient) {}

  /**
   * Load all
   * @param offset Offset
   * @param limit Limit
   */
  loadAll(offset?: number, limit?: number) {
    const url = `${this.baseUrl}/todos`;
    let params = new HttpParams();
    params = offset ? params.set('offset', `${offset}`) : params;
    params = limit ? params.set('limit', `${limit}`) : params;
    return this.http.get<Todo[]>(url, { params });
  }

  /**
   * Load
   * @param id ID
   */
  load(id: string) {
    const url = `${this.baseUrl}/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  /**
   * Create
   * @param todo Todo
   */
  create(todo: Partial<Todo>) {
    const url = `${this.baseUrl}/todos`;
    return this.http.post<Todo>(url, todo);
  }

  /**
   * Update
   * @param todo Todo
   */
  update(todo: Partial<Todo>) {
    const url = `${this.baseUrl}/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  /**
   * Remove
   * @param id ID
   */
  remove(id: string) {
    const url = `${this.baseUrl}/todos/${id}`;
    return this.http.delete<void>(url);
  }
}

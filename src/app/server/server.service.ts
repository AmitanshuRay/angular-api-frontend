import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Server } from './server';

@Injectable()
export class ServerService {
  serverUrl = 'http://localhost:8080';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  /** GET server objects from the server */
  getServers(): Observable<Server[]> {   // GET localhost:8080
    return this.http.get<Server[]>(this.serverUrl);
  }

  /* GET servers whose name contains search term */
  searchServers(term: string): Observable<Server[]> { // GET localhost:8080/name/string
    term = term.trim();
    const url = this.serverUrl + '/name/'+ term;
    return this.http.get<Server[]>(url);
  }

  /* GET servers whose id contains the search term */
  getById(id:string): Observable<Server>{  // GET localhost:8080/42
    id = id.trim();
    const url = `${this.serverUrl}/${id}`; 
    return this.http.get<Server>(url)
  }

  /* PUT a server object in the database */
  addServer(server: Server): Observable<unknown> {  // PUT localhost:8080
    return this.http.put<unknown>(this.serverUrl, server);
  }

  /** DELETE: delete the server object from the server */
  deleteServer(id: string): Observable<unknown> {
    const url = `${this.serverUrl}/${id}`; // DELETE localhost:8080/42
    return this.http.delete(url);
  }
}
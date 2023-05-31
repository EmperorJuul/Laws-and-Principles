import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Law} from "../model/Law";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LawService {

  baseUrl: string = "http://localhost:3000";
  laws: Law[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Law[]> {
    let laws: Law[];
    return this.http.get<Law[]>(`${this.baseUrl}/laws`);
  }

  deleteLaw(id: number) {
    return this.http.delete(`${this.baseUrl}/laws/` + id);
  }
}

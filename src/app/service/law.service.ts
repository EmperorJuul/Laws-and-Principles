import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Law} from "../model/Law";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LawService {

  baseUrl: string = "http://localhost:9080/rest/api";
  laws: Law[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Law[]> {
    let laws: Law[];
    return this.http.get<Law[]>(this.baseUrl + '/laws');
  }

  getLaw() {
    return undefined;
  }

  deleteLaw(id: number) {
    return this.http.delete(this.baseUrl + '/laws' + id);
  }


}

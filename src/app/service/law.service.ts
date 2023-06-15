import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Law} from "../model/Law";
import {Observable} from "rxjs";
import {baseUrl} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class LawService {

  url: string = baseUrl + "/laws"
  laws: Law[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Law[]> {
    let laws: Law[];
    return this.http.get<Law[]>(this.url);
  }

  getLaw() {
    return undefined;
  }

  addLaw(law: Law) {
    return this.http.post<Law>(this.url, law).subscribe(() => this.getAll());
  }

  deleteLaw(id: number) {
    return this.http.delete(this.url + "/" + id);
  }


}

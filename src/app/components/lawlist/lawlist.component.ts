import {Component} from '@angular/core';
import {LawService} from "../../service/law.service";
import {Law} from "../../model/Law";

@Component({
  selector: 'app-lawlist',
  templateUrl: './lawlist.component.html',
  styleUrls: ['./lawlist.component.css']
})
export class LawlistComponent {

  laws: Law[] = []

  constructor(private lawService: LawService) {
    this.getAllLaws();
  }

  getAllLaws() {
    this.lawService.getAll().subscribe((data) => {
      this.laws = data;
    });
  }

  deleteLaw(id: number) {
    this.lawService.deleteLaw(id).subscribe(() => {
      let index = 0;
      for (let item of this.laws) {
        if (item.id == id) {
          this.laws.splice(index, 1);
          console.log(id);
        }
      }
    })

  }

}

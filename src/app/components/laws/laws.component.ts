import {Component} from '@angular/core';
import {Law} from "../../model/Law";
import {LawService} from "../../service/law.service";

@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.css']
})
export class LawsComponent {

  index: number = 0;
  laws: Law[] = [];
  currentLaw: any;

  constructor(private lawService: LawService) {
    this.getAllLaws();
  }

  getAllLaws() {
    this.lawService.getAll().subscribe((data) => {
      this.laws = data
      this.getNextLaw()
    });
  }

  getNextLaw() {
    this.currentLaw = this.laws[this.index]
    this.index = (this.index + 1) % this.laws.length
  }

}

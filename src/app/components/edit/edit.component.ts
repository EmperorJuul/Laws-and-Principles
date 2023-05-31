import {Component, Input} from '@angular/core';
import {Law} from "../../model/Law";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  @Input() law: Law = {} as Law;
}

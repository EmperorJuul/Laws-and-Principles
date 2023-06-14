import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Law} from "../../model/Law";
import {LawService} from "../../service/law.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  lawId: any;
  law: Law = {} as Law;


  constructor(private route: ActivatedRoute,
              private lawService: LawService) {
  }

  ngOnInit() {
    this.lawId = this.route.snapshot.paramMap.get('id');
  }

  save() {

  }


}


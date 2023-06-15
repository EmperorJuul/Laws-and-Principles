import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Law} from "../../model/Law";
import {LawService} from "../../service/law.service";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  lawId: any;
  law: Law = {} as Law;
  lawForm: FormGroup;


  constructor(private route: ActivatedRoute, private lawService: LawService, private fb: FormBuilder) {

    this.lawForm = this.fb.group({
      title: '',
      description: '',
      encodedImage: '',
      wikipedia: '',
      law: ''
    });
  }

  ngOnInit() {

    this.lawId = this.route.snapshot.paramMap.get('id');
  }

  save() {
    console.log(this.lawForm.value.encodedImage);
    this.lawService.addLaw(this.lawForm.value);
  }
}


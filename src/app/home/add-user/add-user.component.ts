import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { GeneralService } from 'src/app/_Service/general.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;
  allUsers: any[] = [];

  constructor(private formBuilder:FormBuilder, private generalService:GeneralService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email]),
      mobileNumber: new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required]),
    })
  }

  get firstName(){
    return this.userForm.get('firstName')
  }
  get lastName(){
    return this.userForm.get('lastName')
  }
  get email(){
    return this.userForm.get('email')
  }
  get mobileNumber(){
    return this.userForm.get('mobileNumber')
  }
  get salary(){
    return this.userForm.get('salary')
  }
  submitForm(){
    console.log('this.userForm',this.userForm)
    this.generalService.getAllData(this.userForm.value)
    this.userForm.reset()
  }

}

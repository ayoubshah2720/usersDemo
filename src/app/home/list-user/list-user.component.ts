import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/_Service/general.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  allUsers: any;

  constructor(private generalService:GeneralService) { }

  ngOnInit(): void {
    this.allUsers = this.generalService.allUsers    
  }

}

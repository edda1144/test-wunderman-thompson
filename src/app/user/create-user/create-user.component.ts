import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public user: User = new User();

  constructor(private userService: UserService, 
              private router: Router) { }

  ngOnInit() {}

  private save(): void {
    this.userService.createUser(this.user)
      .subscribe(res => {
        this.router.navigate(['/userListComponent']);
      }, (err) => {
        console.log(err);
      }
  );
  }
  
  onSubmit() {
    //this.submitted = true;
    this.save();    
  }
 
}

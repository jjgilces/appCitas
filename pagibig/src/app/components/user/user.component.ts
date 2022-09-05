import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { User } from 'src/app/interfaz/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user?:User;
  url:String ='';
  @Input() id: any;
  constructor(private activatedRoute:ActivatedRoute,
    private usersService: PeopleService
    ) { 
      
  }

  ngOnInit(): void {

  }


  change(idx:number){
    this.usersService.getUser(idx).subscribe((datos) => {
      console.log(datos)
      this.user=datos;
      });
    console.log(this.user)
  }
  ngOnChanges(changes: SimpleChanges) {
        
    this.change(changes['id'].currentValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values
    
}
}

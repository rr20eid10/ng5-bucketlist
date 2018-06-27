import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  /**
   * create an instance of the ActivatedRoute via dependency injection
   * in the constructor. We subscribe to the response and I can actually
   * fetch the route parameters in my component class.
   * Ordinarily I would set a property in the constructor and then bind the 
   * property to the 'response' value and then go something like for instance
   * i would query an API to get a specific item from a database
   * 
   * Another topic is component based router navigation.  Sometimes I may need to 
   * change the router outlet component based on logic occurring in a component
   * class for instance.  So in this case, import a router from the angular router library
   * at the top
   * 
   * Now, once again, I have to create an instance of router through dependency 
   * injection "private router: Router".  Then I will create a custom method 'sendMeHome'
   */
  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 

    this.route.params.subscribe(response => console.log(response.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(response => this.goals = response);
  }


  sendMeHome() {
    this.router.navigate(['']); // path: "" is Home
  }

}

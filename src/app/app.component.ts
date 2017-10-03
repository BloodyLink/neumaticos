import { Component } from '@angular/core';
import { DatosService } from './datos.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small => large', animate('300ms ease-in')),
    ]),
  ],
})
export class AppComponent {

constructor(private datosService:DatosService) {}

  someProperty:string = "";
  ngOnInit () {
    console.log(this.datosService.cars);

    this.someProperty = this.datosService.myData();
  }



  title = 'Neumáticos';

  myObject1 = {
  	name: "David",
  	age: 29,
  	occupation: "Developer"
  }

  myObject2 = {
  	name: "Mario",
  	age: "??",
  	occupation: "Plumber"
  }

posts = [
  {
    date: "2017-09-30",
    user: "BloodyLink",
    userId: "1",
    text: "I turned myself into a pickle, Morty! I'm Pickle Rick!"
  },
  {
    date: "2017-09-30",
    user: "BloodyLink",
    userId: "1",
    text: "Well then get your shit together, get it all together and put it in a back pack, all your shit, so it's together."
  }
];

  post = {
    date: "2017-09-30",
    user: "BloodyLink",
    userId: "1",
    text: "I turned myself into a pickle, Morty! I'm Pickle Rick!"
  }


  myArray = [this.myObject1, this.myObject2];
}

import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  dummyData = [
    {
      name: "No1",
      id: 2
    },
    {
      name: "No2",
      id: 4
    },
    {
      name: "No3",
      id: 1
    },
    {
      name: "No4",
      id: 3
    },
    {
      name: "Fooasda",
      id: 3
    },
    {
      name: "Karans",
      id: 3
    },
    {
      name: "Hudiiiia",
      id: 3
    },
    {
      name: "Rinbaar",
      id: 3
    },
    {
      name: "This is a very long condition with a relatively long ttext",
      id: 3
    }
  ];

  dummyOption = {
    name: "No3"
  };

  dummyChange($event) {
    console.log($event);
  }
}

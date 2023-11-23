import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Angular','description':'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.','image':'../../assets/safa.jpg'},
    {'id':2,'name':'Learn TypeScript','description':'You will learn how to apply the JavaScript syntax you already know to TypeScript’s type system. This will help you build your own programming experience and give your code more structure.','image':'../../assets/typescript.png'},
    {'id':3,'name':'Learn Nodejs','description':'Node.js shines in real-time web applications employing push technology over websockets.web applications with real-time, two-way connections, where both the client and server can initiate communication.','image':'../../assets/node.jpg'},
    {'id':4,'name':'Learn ReactJs','description':'React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.    ','image':'../../assets/react.jpeg'},
  ]

}

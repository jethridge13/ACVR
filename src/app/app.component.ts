import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ACVR';
  games = [
  {
    title: 'Animal Crossing',
    year: 2001,
    boxArt: '../assets/ac.jpg'
  },
  {
    title: 'Wild World',
    year: 2005,
    boxArt: '../assets/ww.jpg'
  },
  {
    title: 'City Folk',
    year: 2008,
    boxArt: '../assets/cf.jpg'
  },
  {
    title: 'New Leaf',
    year: 2012,
    boxArt: '../assets/nl.jpg'
  },
  {
    title: 'New Horizons',
    year: 2020,
    boxArt: '../assets/nh.jpg'
  }];
}

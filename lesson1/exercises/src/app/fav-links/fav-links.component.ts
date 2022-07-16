import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.pointlesssites.com/"]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://media.self.com/photos/57d8c2d150778cef321a5c63/master/w_1600%2Cc_limit/cute-kitty-rub-my-belly.jpg';
  image3 = 'https://cdn.vox-cdn.com/thumbor/ZkGzw8SFbuG75WJyOT__QXtna-8=/0x0:1920x1080/1400x1050/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53945429/chorusthumb.0.jpg';

  constructor() { }

  ngOnInit() {
  }

}
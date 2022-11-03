import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-window',
  templateUrl: './image-window.component.html',
  styleUrls: ['./image-window.component.scss']
})
export class ImageWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadImage(imgprop: any){
    console.log(imgprop);

    const imageUrl = imgprop.src;
    console.log(imageUrl);

    fetch(imageUrl, {
      mode : 'no-cors',
    })
      .then(response => response.blob())
      .then(blob => {
      let blobUrl = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.download = blobUrl.replace(/^.*[\\\/]/, '');
      a.href = imageUrl;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
  }
}

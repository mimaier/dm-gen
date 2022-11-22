import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-image-window',
  templateUrl: './image-window.component.html',
  styleUrls: ['./image-window.component.scss']
})
export class ImageWindowComponent implements OnInit {
 
  @Input() public placeHolderImgPath: string = "";
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  upscaleImage(imgprop: any){

    //this.spinner.show();

    const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
    deepai.setApiKey('dea3aaa7-6b55-4af5-862e-1835db355c0c');

    const imageUrl = imgprop.src;

    (async function() {
      const upscaleLabel = document.getElementById('upscaleLabel') as HTMLInputElement;
      const upscaleButton = document.getElementById('upscale-btn') as HTMLInputElement;

      
      upscaleButton.style.backgroundColor = 'rgba(173, 2, 2, 0.77)';
      //upscaleLabel.innerHTML = "currently working ...";

        var resp = await deepai.callStandardApi("torch-srgan", {
                image: imageUrl,
        });
        const promptImage = document.getElementById('prompt-image') as HTMLInputElement;      
        promptImage.src = resp.output_url;

        //upscaleLabel.innerHTML = "Job done!";
        upscaleButton.style.backgroundColor = 'rgba(2, 173, 50, 0.85)';

    })()
   
  }

  downloadImage2(imgprop: any){
    const imageUrl = imgprop.src;

    fetch(imageUrl)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = "my-dm-generation.jpeg";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('An error sorry'));
      }
}

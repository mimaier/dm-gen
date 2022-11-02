import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-prompt-window',
  templateUrl: './prompt-window.component.html',
  styleUrls: ['./prompt-window.component.scss']
})
export class PromptWindowComponent implements OnInit {

  @Input() public promptExtender: string = "";
  @Input() public pageTitle: string = "";

  constructor(private ElByClassName: ElementRef, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  async sendToApi(props: any){
    this.spinner.show();

    const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
    deepai.setApiKey('dea3aaa7-6b55-4af5-862e-1835db355c0c');
    console.log("LÄUFT!");

    const promptTxt = props.value;
    console.log(promptTxt + this.promptExtender);

    var resp = await deepai.callStandardApi("fantasy-world-generator", {
            text: promptTxt + this.promptExtender,
    });

    const promptImage = document.getElementById('prompt-image') as HTMLInputElement;
    console.log(resp);
    console.log(resp.output_url);

    promptImage.src = resp.output_url;
    this.spinner.hide();
  }

}

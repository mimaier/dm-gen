import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {UsersService} from '../users.service';
import { Router } from '@angular/router';

const fs = require('fs');

@Component({
  selector: 'app-prompt-window',
  templateUrl: './prompt-window.component.html',
  styleUrls: ['./prompt-window.component.scss']
})
export class PromptWindowComponent implements OnInit {

  @Input() public promptExtender: string = "";
  @Input() public pageTitle: string = "";
  @Input() public placeHolder: string = "";
  data:any;

  constructor(private ElByClassName: ElementRef, private spinner: NgxSpinnerService,  private user: UsersService,private router: Router) { }

  ngOnInit(): void {
    const prompt_btn = document.getElementById('prompt-btn') as HTMLInputElement;
    const register_txt = document.getElementById('register-text') as HTMLInputElement;
    const register_btn = document.getElementById('register-btn') as HTMLInputElement;

    if(localStorage.getItem('token') != null) {
      prompt_btn.style.visibility = "visible";
      register_txt.style.visibility = "hidden";
      register_btn.style.visibility = "hidden";

    }else{
      prompt_btn.style.visibility = "hidden";
      register_txt.style.visibility = "visible";
      register_btn.style.visibility = "visible";

    }
  }
  ngAfterViewInit() {
    const prompt_btn = document.getElementById('prompt-btn') as HTMLInputElement;
    const register_txt = document.getElementById('register-text') as HTMLInputElement;
    const register_btn = document.getElementById('register-btn') as HTMLInputElement;

    if(localStorage.getItem('token') != null) {
      prompt_btn.style.visibility = "visible";
      register_txt.style.visibility = "hidden";
      register_btn.style.visibility = "hidden";

    }else{
      prompt_btn.style.visibility = "hidden";
      register_txt.style.visibility = "visible";
      register_btn.style.visibility = "visible";

    }
  }
  async sendToApi(props: any){
    let usergenerations : Number;
    //localStorage.setItem('userfreegenerations', "3"); // ---------- for Testing!!

    const upscaleButton = document.getElementById('upscale-btn') as HTMLInputElement;
    upscaleButton.style.backgroundColor = '#3c3c3c';

    if(localStorage.getItem('usergenerations') != "0"){
      usergenerations = Number(localStorage.getItem('usergenerations'));
    }else{
      usergenerations = Number(localStorage.getItem('userfreegenerations'));
    }
    if(usergenerations > 0){
      if(localStorage.getItem('token') != null) {
      this.spinner.show();
      const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
      deepai.setApiKey('dea3aaa7-6b55-4af5-862e-1835db355c0c');

      const promptTxt = props.value;

      var resp = await deepai.callStandardApi("fantasy-world-generator", {
              //image: fs.createReadStream('../../assets/img/characters/character_logo.png'),
              text: promptTxt + this.promptExtender,
              grid_size: "1",
            });

            const promptImage = document.getElementById('prompt-image') as HTMLInputElement;

            promptImage.src = resp.output_url;
            this.spinner.hide();

            let usergenerations = localStorage.getItem('usergenerations');
            if(Number(usergenerations) > 0){
              this.subtractgeneration();
            }else{              
              this.subtractfreegeneration();
            }

            const upscaleBtn = document.getElementById('upscale-btn') as HTMLInputElement;
            upscaleBtn.style.visibility = "visible";
            const downloadBtn = document.getElementById('download-btn') as HTMLInputElement;
            downloadBtn.style.visibility = "visible";
            }else{
            }
      } 
  }

  navigateToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }

subtractfreegeneration(){
    const userId = localStorage.getItem('userid'); 
    let count = 1;



    this.user.subtractfreegeneration(userId, count).subscribe(data=>{
      this.data = Object.values (data);

      localStorage.setItem('userfreegenerations', this.data[4]);          
    })
  }

  subtractgeneration(){
    const userId = localStorage.getItem('userid'); 
    let count = 1;



    this.user.subtractgeneration(userId, count).subscribe(data=>{
      this.data = Object.values (data);

      localStorage.setItem('usergenerations', this.data[5]);          
    })
  }
}

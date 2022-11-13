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
    console.log(localStorage.getItem('token'))
    const prompt_btn = document.getElementById('prompt-btn') as HTMLInputElement;
    const register_txt = document.getElementById('register-text') as HTMLInputElement;
    const register_btn = document.getElementById('register-btn') as HTMLInputElement;

    if(localStorage.getItem('token') != null) {
      prompt_btn.style.display = "block";
      register_txt.style.display = "none";
      register_btn.style.display = "none";

    }else{
      prompt_btn.style.display = "none";
      register_txt.style.display = "block";
      register_btn.style.display = "block";
    }
  }

  async sendToApi(props: any){
    let usergenerations : Number;
    //localStorage.setItem('userfreegenerations', "3"); // ---------- for Testing!!

    console.log(localStorage.getItem('userfreegenerations'));
    if(localStorage.getItem('usergenerations') != "0"){
      usergenerations = Number(localStorage.getItem('usergenerations'));
    }else{
      usergenerations = Number(localStorage.getItem('userfreegenerations'));
    }
    if(usergenerations > 0){
      this.spinner.show();

    const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
    deepai.setApiKey('dea3aaa7-6b55-4af5-862e-1835db355c0c');
    console.log("LÄUFT!");

    const promptTxt = props.value;
    console.log(promptTxt + this.promptExtender);

    var resp = await deepai.callStandardApi("fantasy-world-generator", {
            //image: fs.createReadStream('../../assets/img/characters/character_logo.png'),
            text: promptTxt + this.promptExtender,
            grid_size: "1",
                        
    });
    
    

    const promptImage = document.getElementById('prompt-image') as HTMLInputElement;
    console.log(resp);
    console.log(resp.output_url);

    promptImage.src = resp.output_url;
    this.spinner.hide();
    this.subtractfreegeneration();
    }else{
      console.log("No more generations available!");
    }
    
  }
  navigateToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }

subtractfreegeneration(){
    const userId = localStorage.getItem('userid'); 
    let count = 1;


    console.log(userId);

    this.user.subtractfreegeneration(userId, count).subscribe(data=>{
      this.data = Object.values (data);

      console.log(this.data)
      localStorage.setItem('userfreegenerations', this.data[4]);
          
    })


  }

}

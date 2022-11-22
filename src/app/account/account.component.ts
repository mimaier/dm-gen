import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';
import { render } from 'creditcardpayments/creditCardPayments'
import { IPayPalConfig, ICreateOrderRequest }  from 'ngx-paypal';

declare var paypal : any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  data:any;

  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;

  constructor(private router: Router, private user: UsersService) { 
  }

// PAYPAL !!  https://www.youtube.com/watch?v=AtZGoueL4Vs 
  ngOnInit(): void {
    this.initConfig();

    let generationsLeft : number;
    if(localStorage.getItem('usergenerations') !== "0"){
      generationsLeft = Number(localStorage.getItem('usergenerations'));
    }else{
      generationsLeft = Number(localStorage.getItem('userfreegenerations'));
    }
    console.log(localStorage.getItem('userfreegenerations'));
    console.log(localStorage.getItem('usergenerations'));

    //Adding both token counts together!
    generationsLeft = Number(localStorage.getItem('usergenerations')) + Number(localStorage.getItem('userfreegenerations'));

    const username = document.getElementById('username') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const generations = document.getElementById('generations') as HTMLInputElement;

    username.innerHTML = "" + localStorage.getItem('username');
    email.innerHTML = "" + localStorage.getItem('usermail');
    generations.innerHTML = "" + generationsLeft;

  }

  ngAfterViewInit(): void {
    
  }
  goBackToPage(pageName : string){
    this.router.navigate([`${pageName}`]);
  }

  loginUser(email:string, password:string){
    this.user.loginUser(email, password).subscribe(data=>{
      this.data = Object.values (data);
      localStorage.setItem('username', this.data[0]);
      localStorage.setItem('usermail', this.data[0]);
      localStorage.setItem('token', this.data[0]);
      const accountButton = document.getElementById('accountbtn') as HTMLInputElement;
      const logoutButton = document.getElementById('logoutbtn') as HTMLInputElement;
      const registerButton = document.getElementById('registerbutton') as HTMLInputElement;

      accountButton.style.display = "block";
      logoutButton.style.display = "block";
      registerButton.style.display = "none";

    })
  }

  registerUser(username:string, password:string, email:string){

    this.user.registerUser(username, password, email).subscribe(data=>{

      this.data = Object.values (data);
    })
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    
    clientId: 'Ac6YvVy9gCoVTUHyFnPGrhHUmwBj59TdCF6cvgaquOLyTdjaY5QBFQWr2VSZ-bVCJju7mNrOyozcj_6U',
    //clientId: 'wrongkey',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '0.50',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '0.50'
              }
            }
          },
          items: [
            {
              name: 'dm-gen 250 generations',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '0.50',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details: any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      
      const pay_pal_success = document.getElementById('pay-pal-success') as HTMLInputElement;
      pay_pal_success.style.visibility = "visible";
      pay_pal_success.innerHTML = "Payment successfull! <br> Have fun generating!"
      pay_pal_success.style.color = "#265233";

      this.showSuccess = true;
      this.addgeneration();

    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
      const pay_pal_success = document.getElementById('pay-pal-success') as HTMLInputElement;
      pay_pal_success.style.visibility = "visible";
      pay_pal_success.innerHTML = "Payment was not successful!"
      pay_pal_success.style.color = "#eb4034";
    },
    onError: err => {
      console.log('OnError', err);
      const pay_pal_success = document.getElementById('pay-pal-success') as HTMLInputElement;
      pay_pal_success.style.visibility = "visible";
      pay_pal_success.innerHTML = "Payment was not successful!"
      pay_pal_success.style.color = "#eb4034";
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  

  }

  addgeneration(){
    const userId = localStorage.getItem('userid'); 
    let count = 250;

    this.user.addgeneration(userId, count).subscribe(data=>{
      this.data = Object.values (data);
      console.log(this.data);
      localStorage.setItem('usergenerations', this.data[5]);
      const generations = document.getElementById('generations') as HTMLInputElement;
      let current_generation = Number(generations.innerHTML);
      console.log(generations);
      console.log(current_generation);

      current_generation = current_generation + 250;

      generations.innerHTML = current_generation.toString();
      console.log(generations.innerHTML);

    })


  }

}


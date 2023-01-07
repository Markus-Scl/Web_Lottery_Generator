import { Component } from '@angular/core';

@Component({
  selector: 'app-lottery-draw-page',
  templateUrl: './lottery-draw-page.component.html',
  styleUrls: ['./lottery-draw-page.component.css']
})
export class LotteryDrawPageComponent {
    displayedFiveNumbers: number [] = [];
    displayedTwoNumbers: number [] = [];
    fiveOutOfFifty: number [] = [];
    twoOutOfTwelve: number [] = [];

    fiftyArray: number [] = [];
    twelveArray: number [] = [];

    prefillArrays(fiftyNumbers: number[], tweveNumbers: number[]){
      for(let i = 1; i < 51; i++){
        fiftyNumbers.push(i);
      }
      for(let i = 1; i < 13; i++){
        tweveNumbers.push(i);
      }
    }

    

  randomIntFromInterval(min: number, max: number) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
  }

  async drawNumbersFiveFromFifty(){

    let fiftyNumbers: number[] = [];
    let twelveNumbers: number[] = [];

    this.prefillArrays(fiftyNumbers, twelveNumbers);

    for(let i = 0; i < 5; i++){
      let idx = this.randomIntFromInterval(0, fiftyNumbers.length - 1);
      this.fiveOutOfFifty.push(fiftyNumbers[idx]);
      fiftyNumbers.splice(idx, 1);
    }
    this.fiveOutOfFifty = this.fiveOutOfFifty.sort((n1, n2) => n1 - n2);

    for(let number of this.fiveOutOfFifty){
      this.displayedFiveNumbers.push(number);
      await new Promise(f => setTimeout(f, 800));
    }

    for(let i = 0; i < 2; i++){
      let idx = this.randomIntFromInterval(0, twelveNumbers.length - 1);
      this.twoOutOfTwelve.push(twelveNumbers[idx]);
      twelveNumbers.splice(idx, 1);
    }
    this.twoOutOfTwelve = this.twoOutOfTwelve.sort((n1, n2) => n1 - n2);

    for(let number of this.twoOutOfTwelve){
      this.displayedTwoNumbers.push(number);
      await new Promise(f => setTimeout(f, 800));
    }
  }
}

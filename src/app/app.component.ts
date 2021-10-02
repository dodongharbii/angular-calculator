import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';
  finalAns = ''
  answer = 0;
  fNum = 0;
  sNum = 0;
  fNAN = false;
  sNAN = false;

  getFInput(num: string)
  {
    let value = parseInt(num);
    this.finalAns = '';

    if(!isNaN(value))
    {
      this.fNum = value;
      this.fNAN = false;
    }
    else
      this.fNAN = true;
  }

  getSInput(num: string)
  {
    let value = parseInt(num);
    this.finalAns = '';

    if(!isNaN(value))
    {
      this.sNum = value;
      this.sNAN = false;
    }
    else
      this.sNAN = true;
  }

  toCalculate(choice: string)
  {
    let op = parseInt(choice);

    if(this.fNAN || this.sNAN)
      this.finalAns = "Invalid Input";    
    else
    {
      switch(op)
      {
        case 1: this.answer = this.fNum + this.sNum; break;
        case 2: this.answer = this.fNum - this.sNum; break;
        case 3: this.answer = this.fNum * this.sNum; break;
        case 4: this.answer = this.fNum / this.sNum; break;
      }
      this.finalAns = this.answer.toString();

      if(op === 4 && (this.sNum === 0 && this.fNum !== 0))
        this.finalAns = "Divisor can not be zero!";
    }

    this.onClick();
  }

  onClick()
  {
    console.log(this.fNum + "and" + this.sNum);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  answer = 0;
  @Input() finalAns !: string;
  @Input() fNAN !: boolean;
  @Input() sNAN !: boolean;
  @Input() fNum !: number;
  @Input() sNum !: number;
  @Input() choice !: string;
  @Input() emptyF !: boolean;
  @Input() emptyS !: boolean;

  toCalculate(choice: string)
  {
    let op = parseInt(choice);

    console.log(this.fNum);
    console.log(this.sNum);
    console.log(this.fNAN);
    console.log(this.sNAN);

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

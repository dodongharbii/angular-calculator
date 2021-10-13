import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  finalAns = '';
  //answer = 0;
  fNum = 0;
  sNum = 0;
  fNAN = false;
  sNAN = false;
  empty1 = true;
  empty2 = true
  @Output() finalAnswer = new EventEmitter<string>();
  @Output() fNANVal = new EventEmitter<boolean>();
  @Output() sNANVal = new EventEmitter<boolean>();
  @Output() fNumVal = new EventEmitter<number>();
  @Output() sNumVal = new EventEmitter<number>();
  @Output() emptyOne = new EventEmitter<boolean>();
  @Output() emptyTwo = new EventEmitter<boolean>();

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

    this.checkInputOne(num);

    this.finalAnswer.emit(this.finalAns);
    this.fNumVal.emit(this.fNum);
    this.fNANVal.emit(this.fNAN);
    console.log("numbers-ts " + this.finalAns)
    //console.log("numbers-ts " + this.fNum);
    //console.log("numbers-ts " + this.fNAN);
  }

  getSInput(num: string)
  {
    let value = parseInt(num);
    this.finalAns = '';
    this.finalAnswer.emit(this.finalAns);

    if(!isNaN(value))
    {
      this.sNum = value;
      this.sNAN = false;
    }
    else
      this.sNAN = true;

    this.checkInputTwo(num);

    this.finalAnswer.emit(this.finalAns);
    this.sNumVal.emit(this.sNum);
    this.sNANVal.emit(this.sNAN);
    //console.log("numbers-ts " + this.sNum);
    //console.log("numbers-ts " + this.sNAN);
  }

  checkInputOne(input: string)
  {
    if(input.length === 0)
      this.empty1 = true;
    else
      this.empty1 = false;

    this.emptyOne.emit(this.empty1);
  }

  checkInputTwo(input: string)
  {
    if(input.length === 0)
      this.empty2 = true;
    else
      this.empty2 = false;

      this.emptyTwo.emit(this.empty2);
  }
}

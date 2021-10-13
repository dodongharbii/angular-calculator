import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() emptyF !: boolean;
  @Input() emptyS !: boolean;
  @Output() operation = new EventEmitter<string>();
  getOp(choice: string)
  {
    this.operation.emit(choice);
  }
}

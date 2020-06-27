import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dataList: Array<IEmployee> = [
    {
      id: 1,
      name: 'Mark Humpreys',
      age: 45,
      dob: '10/19/1975'
    },
    {
      id: 2,
      name: 'Katrina Campbell',
      age: 35,
      dob: '01/01/1985'
    },
    {
      id: 3,
      name: 'John Doe',
      age:30,
      dob:'12/15/1990'
    },
    {
      id:4,
      name:'Steve Smith',
      age:31,
      dob:'02/21/1989'
    },
    {
      id:5,
      name:'David Warner',
      age:33,
      dob:'05/07/1987'
    },
    {
      id:6,
      name:'Marnus Labuschagne',
      age:26,
      dob:'09/05/1994'
    }
  ]
}


export interface IEmployee {
  id: number;
  name: string;
  age: number,
  dob: string;
}
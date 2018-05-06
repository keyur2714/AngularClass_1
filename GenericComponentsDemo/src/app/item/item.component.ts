import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemList: Item[] = [
    {
      "itemId":1,
      "code":"I001",
      "description":"PIZZA",
      "price":300,
      "quantity":3
    },
    {
      "itemId":2,
      "code":"I002",
      "description":"BURGER",
      "price":100,
      "quantity":2
    },
    {
      "itemId":3,
      "code":"I003",
      "description":"SANDWICH",
      "price":100,
      "quantity":2
    }
  ];

  headerColumnList:string [] = ["itemId","code","description","price","quantity"];
  //headerColumnList:string [] = ["description","price","quantity"];
  displayColumnList:string[] = ["Item #","Code","Description","Price","Quantity"];
  //displayColumnList:string[] = ["Description","Price","Quantity"]

  constructor() { }

  ngOnInit() {

  }

}

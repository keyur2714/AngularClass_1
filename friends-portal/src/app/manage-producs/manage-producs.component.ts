import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-manage-producs',
  templateUrl: './manage-producs.component.html',
  styleUrls: ['./manage-producs.component.css']
})
export class ManageProducsComponent implements OnInit {


  product : Product;

  products : Product[] = [
    {
     "pid" : 123,
     "code" : "P001",
     "description" : "Computer Samsung",
     "price" : 20000,
     "quantity" : 10
    },
    {
     "pid" : 234,
     "code" : "P002",
     "description" : "Mobile MI Note",
     "price" : 10000,
     "quantity" : 12
    },
    {
     "pid" : 334,
     "code" : "P003",
     "description" : "Laptop Dell",
     "price" : 24000,
     "quantity" : 6
    }
  ];

  //old way javascript style object
  // product = {
  //   "pid" : 123,
  //   "code" : "P001",
  //   "description" : "Computer",
  //   "price" : 20000,
  //   "quantity" : 10
  // };

  constructor() { 
    // this.product.pid = 10;
    // this.product.code = "P002";
    // this.product.price = 20000;
    // this.product.quantity = 10;
    // this.product.description = "Computer HP";
  }

  ngOnInit() {
    //this.product.code = "P003";
    this.products.splice(1,1);
  }

  addProduct(pid,code,description,price,quantity){
    this.product = new Product();
    this.product.pid = pid;
    this.product.code = code;
    this.product.price = price;
    this.product.quantity = quantity;
    this.product.description = description;
    this.products.push(this.product);
  }
}

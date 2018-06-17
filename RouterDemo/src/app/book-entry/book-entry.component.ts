import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  constructor(private router:Router,private location : Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  save(){
    console.log("Save");
    this.router.navigate(['/book-list']);
  }

}

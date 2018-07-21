import { Component,ViewChild,Inject } from '@angular/core';
import {MatTableDataSource,MatPaginator} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'Material Components Demo';
  @ViewChild(MatPaginator) 
  paginator: MatPaginator;  
  displayedColumns = ["id","deptName"];
  selectedDepartment = {
      "id":20,
      "deptName":"Sales"
    };
  departments = [
    {
      "id":10,
      "deptName":"IT"
    },
    {
      "id":20,
      "deptName":"Sales"
    },
    {
      "id":30,
      "deptName":"Hr"
    }
  ];
  dataSource = new MatTableDataSource(this.departments);
  
  constructor(public dialog: MatDialog){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  search(filterValue: string){
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(){
    console.log("Open Dialog...!");

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: 'keyur'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');     

    });

  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
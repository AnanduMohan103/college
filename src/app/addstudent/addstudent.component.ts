import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
name=""
rollNumber=""
collegeName=""
admissionNumber=""
parentName=""
dob=""
address=""
mob=""
parentMOb=""
email=""
bloodGroup=""

readValue=()=>{
  let data={
   "name":this.name ,
   "rollNumber":this.rollNumber,
"collegeName":this.collegeName,
"admissionNumber":this.admissionNumber,
"parentName":this.parentName,
"dob":this.dob,
"address":this.address,
"mob":this.mob,
"parentMOb":this.parentMOb,
"email":this.email,
"bloodGroup":this.bloodGroup
  }
  console.log(data)
}

  ngOnInit(): void {
  }

}

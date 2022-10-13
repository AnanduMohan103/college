import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchstud',
  templateUrl: './searchstud.component.html',
  styleUrls: ['./searchstud.component.css']
})
export class SearchstudComponent implements OnInit {

  constructor() { }
searchStud=""

readValue=()=>{
  let data={
    "searchstud":this.searchStud
  }
  console.log(data)
}
  ngOnInit(): void {
  }

}

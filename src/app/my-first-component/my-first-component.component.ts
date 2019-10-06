import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
 
  @Input() name = "World";


  constructor() { }

  ngOnInit() {
      console.log("On init");
  }

  ngAfterViewInit(): void {
    console.log("On after view init");
  }

  ngOnDestroy(): void {
    console.log("On destroy");
  }

  ngOnChanges(): void {
    console.log("On changes", this.name);
  }

}

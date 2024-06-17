import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, OnDestroy, AfterViewChecked, AfterViewInit, } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked, OnDestroy {
@Input() message!:string;
@ViewChild('temp') tempPara!: ElementRef;
@ContentChild('temp') tempContent!: ElementRef;
constructor(){
  console.log(this.message);
}
ngOnChanges(changes: SimpleChanges){
 console.log('ngonchanges hook called');
 console.log(changes);
}
ngOnInit(): void {
  console.log('ngoninit hook called');
  console.log(this.tempPara.nativeElement.innerHTML);
}
ngDoCheck(){
  console.log('ngdocheck hook called');
  console.log(this.tempContent);
}
ngAfterContentInit(){
  console.log('ngaftercontentinit hook called');
  console.log(this.tempContent.nativeElement);
}
ngAfterContentChecked(){
  console.log('ngaftercontentChecked hook called');
  console.log(this.tempContent.nativeElement);
}
ngAfterViewInit(){
  console.log('ngAfterViewInit Hook called');
  //console.log('In ngAfterViewInit', this.tempPara);
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked Hook called');
  //console.log(this.tempPara.nativeElement.textContent);
}

ngOnDestroy(){
  console.log('ngOnDestroy Hook called');
  }

}

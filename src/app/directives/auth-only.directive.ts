import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAuthOnly]'
})
export class AuthOnlyDirective {

  //check if the user is verified
  @Input() isVerified: Boolean = false;

  constructor(private el: ElementRef, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.updateVisibility();
  }

  private updateVisibility() {
    if(this.isVerified) {
      //show element if true 
      this.el.nativeElement.style.display = ''
    } else {
      //hide element if false
      this.el.nativeElement.style.display = 'none'

    }
  }

  ngOnChanges() { //exictues when anything changes
    this.updateVisibility();
    this.cdRef.detectChanges();
  }




}

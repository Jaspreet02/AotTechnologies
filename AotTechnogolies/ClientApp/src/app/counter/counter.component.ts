import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public reverseCount = 0;
  public palindromeCount = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      if (res['count']) {
        this.currentCount = res.count;
      }
      if (res['reverseCount'])
      {
        this.reverseCount = res.reverseCount;
      }
      if (res['palindromeCount']) {
        this.palindromeCount = res.palindromeCount;
      }
    });
  }

  public incrementCounter() {
    this.currentCount++;
  }
}

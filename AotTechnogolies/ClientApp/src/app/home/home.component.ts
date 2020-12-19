import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  queryValue: string;
  messageValue: string;
  constructor(private router: Router) {
  }
  search() {
    var count = 0;
    var reverseCount = 0;
    var palindromeCount = 0;
    if ((this.queryValue != null && this.queryValue.trim().length > 0)  && (this.messageValue != null && this.messageValue.trim().length > 0)) {
      var reverseString = this.queryValue.split("").reverse().join("");
      reverseCount = (this.messageValue.match(new RegExp(reverseString, "g")) || []).length;
      count = (this.messageValue.replace(/\s/g, '').match(new RegExp(this.queryValue.replace(/\s/g, ''), "g")) || []).length;
    }
    if (this.messageValue != null && this.messageValue.trim().length > 0) {
      var stringList = this.messageValue.split(/(\s+)/).filter(function (e) { return e.trim().length > 0; });
      for (var i = 0; i < stringList.length; i++) {
        if (this.checkPalindrom(stringList[i])) { palindromeCount++; }
      }
    }
    this.router.navigate(['/counter', count, reverseCount, palindromeCount]);
    // this.router.navigate(['counter', { count: 5, reverseCount: 10 }]);
    // event.preventDefault();
  }

  checkPalindrom(str) {
    return str == str.split('').reverse().join('');
  }
}

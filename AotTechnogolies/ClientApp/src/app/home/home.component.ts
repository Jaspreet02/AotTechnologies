import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  queryValue: string;
  messageValue: string;
  url: string;

  constructor(private router: Router,private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }
  search() {
    //first implemented logic in typescript but after i move into back end.
    this.http.get<result>(this.url + 'api/Home/GetCount/' + this.queryValue + '/' + this.messageValue ).subscribe(result => {
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
      console.log(count);
      console.log(reverseCount);
      console.log(palindromeCount);
     this.router.navigate(['/counter', result.count, result.reverseCount,result.palindromeCount]);
   }, error => console.error(error));
    // this.router.navigate(['counter', { count: 5, reverseCount: 10 }]);
    // event.preventDefault();
  }

  checkPalindrom(str) {
    return str == str.split('').reverse().join('');
  }
}

interface result {
  count: number;
  reverseCount: number;
  palindromeCount: number;
}

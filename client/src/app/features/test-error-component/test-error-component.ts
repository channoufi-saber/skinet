import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-error-component',
  imports: [],
  templateUrl: './test-error-component.html',
  styleUrl: './test-error-component.css',
})
export class TestErrorComponent {
  baseUrl = 'http://localhost:5117/api/';
  private http = inject(HttpClient);

  get404Error() {
    this.http.get(this.baseUrl + 'buggy/notfound').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badRequest').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}

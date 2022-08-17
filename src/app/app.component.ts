import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  counter = 13;

  decresase3Bnt() {
    if (this.counter > 2) {
      this.counter -= 3;
    }
  }

  increase2Bnt() {
    this.counter += 2;
  }
}

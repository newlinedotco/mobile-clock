import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Rx";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
    private n = 60;
    private now: Date = new Date();
    private timer;
    private subscription: Subscription;
    private bgColor: String = "#bbaaab";

    ngOnInit() {
      let timer = TimerObservable.create(0, 1000);
      this.subscription = timer.subscribe(t => {
        this.now = new Date();
        this.bgColor = this.calculateColor(this.now.getSeconds());
      });
    }

    private calculateColor(n) {
      let R = (255 * n) / 60;
      let G = (255 * (60 - n)) / 60;
      let B = 89;
      return `rgba(${R}, ${G}, ${B}, 0.8)`;
    }

    public getBgStyle() {
      return { "background-color": this.bgColor };
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }


}

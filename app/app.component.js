"use strict";
var core_1 = require("@angular/core");
var TimerObservable_1 = require("rxjs/observable/TimerObservable");
var AppComponent = (function () {
    function AppComponent() {
        this.n = 60;
        this.now = new Date();
        this.bgColor = "#bbaaab";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = TimerObservable_1.TimerObservable.create(0, 1000);
        this.subscription = timer.subscribe(function (t) {
            _this.now = new Date();
            _this.bgColor = _this.calculateColor(_this.now.getSeconds());
        });
    };
    AppComponent.prototype.calculateColor = function (n) {
        var R = (255 * n) / 60;
        var G = (255 * (60 - n)) / 60;
        var B = 89;
        return "rgba(" + R + ", " + G + ", " + B + ", 0.8)";
    };
    AppComponent.prototype.getBgStyle = function () {
        return { "background-color": this.bgColor };
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
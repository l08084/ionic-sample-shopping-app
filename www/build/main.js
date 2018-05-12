webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(events, storage, utilityProvider) {
        this.events = events;
        this.storage = storage;
        this.utilityProvider = utilityProvider;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */];
        // カート内の商品の数
        this.itemCount = 0;
    }
    /**
     * Ionicのライフサイクルメソッド
     * タブ画面の作成時に呼び出される
     *
     * @memberof TabsPage
     */
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // トピック`cart:updated`を購読している
        // 最新のカート内の商品数を取得して、バッジの数値を更新する
        this.events.subscribe("cart:updated", function (count) { return (_this.itemCount = count ? count : 0); });
        // アプリの初期表示時のタイミング
        // 前回起動時にカート内に商品を入れた場合を考慮して、
        // ストレージの読み込みを実施している
        this.storage
            .length()
            .then(function (result) {
            if (result !== 0) {
                _this.storage
                    .get("items")
                    .then(function (items) {
                    // 現在のカート内の商品の数を取得
                    _this.utilityProvider.countItems(items);
                })
                    .catch(function (err) { return console.log("storage error: " + err); });
            }
        })
            .catch(function (err) { return console.log("storage error: " + err); });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="商品" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="カート" tabIcon="cart" tabBadge="{{itemCount}}" tabBadgeStyle="danger"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__["a" /* UtilityProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // 全商品リストを取得
        this.apiProvider.retrieve().subscribe(function (products) {
            _this.productList = products;
            // トップス のみのリストを取得
            _this.topsList = products.filter(function (product) { return product.type === 0 /* tops */; });
            // ジャケット/アウター のみのリストを取得
            _this.jacketList = products.filter(function (product) { return product.type === 1 /* jacket */; });
        });
    };
    HomePage.prototype.goToDetail = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], { product: product });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Apparel</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      トップス\n    </ion-list-header>\n    <button ion-item *ngFor="let tops of topsList" (click)="goToDetail(tops)">\n      <ion-thumbnail item-start>\n        <img src="{{tops.imagePath}}">\n      </ion-thumbnail>\n      <h2>{{tops.name}}</h2>\n      <p>￥{{tops.price}}</p>\n    </button>\n    <ion-list-header>\n      ジャケット/アウター\n    </ion-list-header>\n    <button ion-item *ngFor="let jacket of jacketList" (click)="goToDetail(jacket)">\n      <ion-thumbnail item-start>\n        <img src="{{jacket.imagePath}}">\n      </ion-thumbnail>\n      <h2>{{jacket.name}}</h2>\n      <p>￥{{jacket.price}}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageProvider = storageProvider;
    }
    DetailPage.prototype.ngOnInit = function () {
        // 商品リスト画面でタップした商品情報を受け取る
        this.product = this.navParams.get("product");
    };
    /**
     * ショッピングカートに商品を追加する
     *
     * @param {Product} product
     * @memberof DetailPage
     */
    DetailPage.prototype.addItem = function (product) {
        this.storageProvider.addItem(product);
        // 商品リスト画面に戻る
        this.navCtrl.pop();
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-detail",template:/*ion-inline-start:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>{{product.name}}</h2>\n  <div class="image-container">\n    <img class="product-image" src="{{product.imagePath}}">\n  </div>\n  <div class="comment">\n    <p>{{product.commentOne}}</p>\n    <p>{{product.commentTwo}}</p>\n  </div>\n  <ion-list no-lines>\n    <ion-item>\n      <div>\n        <p class="title">小計</p>\n        <p class="price">￥{{product.price}}</p>\n      </div>\n    </ion-item>\n    <ion-item></ion-item>\n  </ion-list>\n  <button ion-button full color="secondary" class="in-cart" (click)="addItem(product)">カートに1つ追加する</button>\n</ion-content>\n'/*ion-inline-end:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/detail/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility_utility__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StorageProvider = /** @class */ (function () {
    function StorageProvider(http, storage, events, utilityProvider) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.utilityProvider = utilityProvider;
    }
    StorageProvider.prototype.addItem = function (product) {
        var _this = this;
        var itemList = [];
        this.storage
            .length()
            .then(function (result) {
            // カート内の商品が0個だった場合
            if (result === 0) {
                itemList = [];
                itemList.push(product);
                // ストレージにボタンを押下した商品を追加する
                _this.storage.set("items", itemList);
                // トピック`cart:updated`で出版
                // eventDataとして、カート内の商品の数を渡している
                _this.events.publish("cart:updated", 1);
            }
            else {
                // カート内にすでに商品があった場合
                _this.storage
                    .get("items")
                    .then(function (items) {
                    items.push(product);
                    var result = _this.utilityProvider.countItems(items);
                    // ストレージにボタンを押下した商品を追加する
                    _this.storage.set("items", result);
                })
                    .catch(function (err) { return console.log("storage error: " + err); });
            }
        })
            .catch(function (err) { return console.log("storage error: " + err); });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__utility_utility__["a" /* UtilityProvider */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
    }
    /**
     * JSONにアクセスして、結果をProduct[]に変換
     *
     * @returns {Observable<Product[]>}
     * @memberof ApiProvider
     */
    ApiProvider.prototype.retrieve = function () {
        return this.http.get("assets/data/products.json");
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, alertCtrl, storage, events, utilityProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.events = events;
        this.utilityProvider = utilityProvider;
    }
    /**
     * Ionicのライフサイクルメソッドの一種
     * ページがアクティブになると呼び出される
     *
     * @memberof CartPage
     */
    CartPage.prototype.ionViewDidEnter = function () {
        // 画面の初期化処理
        this.init();
    };
    /**
     * カート画面の初期化処理を行う
     * ストレージの読み込みを行い、商品が入っていればリスト形式で表示する
     *
     * @memberof CartPage
     */
    CartPage.prototype.init = function () {
        var _this = this;
        this.productList = [];
        this.subtotal = 0;
        this.total = 0;
        this.isEmpty = false;
        this.storage
            .length()
            .then(function (result) {
            // カート内に商品がある場合
            if (result > 0) {
                _this.storage
                    .get("items")
                    .then(function (result) {
                    _this.productList = result;
                    _this.productList.forEach(
                    // 小計を計算
                    function (product) { return (_this.subtotal += product.price * product.quantity); });
                    // 小計にデリバリー料を加算して、合計を計算している
                    _this.total = _this.subtotal + 300;
                })
                    .catch(function (err) { });
            }
            else {
                // カート内が空の場合
                _this.isEmpty = true;
            }
        })
            .catch(function (err) { });
    };
    /**
     * 「注文する」ボタン押下時に呼び出し
     *  Confirm Alertを表示し、OKを選択すると、
     *  注文を確定して、ストレージをクリアする
     *
     * @memberof CartPage
     */
    CartPage.prototype.order = function () {
        var _this = this;
        // Confirm Alertを表示する
        var confirm = this.alertCtrl.create({
            title: "注文を確定しますか？",
            buttons: [
                {
                    text: "キャンセル",
                    handler: function () { }
                },
                {
                    text: "OK",
                    handler: function () {
                        var alert = _this.alertCtrl.create({
                            title: "ご注文を受け付けました！",
                            subTitle: "ご指定の住所までのお届け時間は、20-30分程です",
                            buttons: ["OK"]
                        });
                        alert.present();
                        // ショッピングカートの中を空にする
                        _this.allRemove();
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * ショッピングカートの中を空にする
     *
     * @memberof CartPage
     */
    CartPage.prototype.allRemove = function () {
        var _this = this;
        this.storage.clear().then(function () {
            _this.events.publish("cart:updated", 0);
            _this.init();
        });
    };
    CartPage.prototype.remove = function (index) {
        var _this = this;
        this.productList.splice(index, 1);
        this.storage
            .get("items")
            .then(function (result) {
            result.splice(index, 1);
            var count = result.reduce(function (a, x) { return (a += x.quantity); }, 0);
            if (count === 0) {
                _this.allRemove();
            }
            else {
                _this.events.publish("cart:updated", count);
                _this.storage.set("items", result);
                _this.init();
            }
        })
            .catch(function (err) { });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cart",template:/*ion-inline-start:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      カート\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="allRemove()">空にする</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="!isEmpty; else elseBlock">\n    <ion-list>\n      <!-- ItemSlidingにしたいリストの部分を\'ion-item-sliding\'で囲む -->\n      <ion-item-sliding *ngFor="let product of productList; let i = index">\n        <ion-item>\n          <div class="quantity">{{product.quantity}}</div>\n          <div class="product">{{product.name}}</div>\n          <div class="price">￥{{product.price * product.quantity}}</div>\n        </ion-item>\n        <!-- スライドした時に表示したいアイテムはここに書く -->\n        <ion-item-options>\n          <button ion-button (click)="remove(i)" color="danger">アイテムを削除する</button>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-item>\n        <div class="check-detail">\n          <p class="title">小計</p>\n          <p class="price">￥{{subtotal}}</p>\n        </div>\n        <div class="check-detail">\n          <p class="title">デリバリー料</p>\n          <p class="price">￥300</p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <div class="title emphasis">合計（税込み）</div>\n        <div class="price emphasis">￥{{total}}</div>\n      </ion-item>\n      <ion-item no-lines>\n      </ion-item>\n    </ion-list>\n    <button ion-button full color="secondary" class="order" (click)="order()">注文する</button>\n  </div>\n  <ng-template #elseBlock>\n    <div class="empty">\n      <ion-icon name="cart" class="icon"></ion-icon>\n      <div class="message">カートは空です</div>\n    </div>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"/Users/takuya/Practice/ionic-sample-shopping-app/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_storage_storage__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_utility_utility__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_api__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */], __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */], __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_utility_utility__["a" /* UtilityProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/takuya/Practice/ionic-sample-shopping-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/takuya/Practice/ionic-sample-shopping-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilityProvider = /** @class */ (function () {
    function UtilityProvider(http, events) {
        this.http = http;
        this.events = events;
    }
    UtilityProvider.prototype.countItems = function (productList) {
        var result = this.groupBy(productList);
        var count = result.reduce(function (a, x) { return (a += x.quantity); }, 0);
        this.events.publish("cart:updated", count);
        return result;
    };
    UtilityProvider.prototype.groupBy = function (productList) {
        var group = productList.reduce(function (result, current) {
            var element = result.find(function (p) { return p.id === current.id; });
            if (element) {
                // 商品の数量をインクリメントする
                element.quantity += 1;
            }
            else {
                result.push(current);
            }
            return result;
        }, []);
        return group;
    };
    UtilityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], UtilityProvider);
    return UtilityProvider;
}());

//# sourceMappingURL=utility.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map
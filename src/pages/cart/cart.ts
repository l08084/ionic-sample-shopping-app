import { Component } from "@angular/core";
import { AlertController, NavController, Events } from "ionic-angular";
import { Product } from "../../model/product.model";
import { Storage } from "@ionic/storage";
import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {
  productList: Product[];
  subtotal: number;
  total: number;
  isEmpty: boolean;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private storage: Storage,
    private productProvider: ProductProvider
  ) {}

  ionViewDidEnter() {
    this.productList = [];
    this.subtotal = 0;
    this.total = 0;
    this.isEmpty = false;
    this.storage
      .length()
      .then(result => {
        if (result > 0) {
          this.storage
            .get("items")
            .then(result => {
              this.productList = result;
              this.productList.forEach(
                product => (this.subtotal += product.price)
              );
              this.total = this.subtotal + 300;
            })
            .catch(err => {});
        } else {
          this.isEmpty = true;
        }
      })
      .catch(err => {});
  }

  order() {
    const confirm = this.alertCtrl.create({
      title: "注文を確定しますか？",
      buttons: [
        {
          text: "キャンセル",
          handler: () => {}
        },
        {
          text: "OK",
          handler: () => {
            let alert = this.alertCtrl.create({
              title: "ご注文を受け付けました！",
              subTitle: "ご指定の住所までのお届け時間は、20-30分程です",
              buttons: ["OK"]
            });
            alert.present();
            this.storage.clear();
            this.productList = [];
            this.isEmpty = true;
          }
        }
      ]
    });
    confirm.present();
  }
}

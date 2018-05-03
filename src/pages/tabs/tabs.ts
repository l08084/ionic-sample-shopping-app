import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { CartPage } from "../cart/cart";
import { Events } from "ionic-angular";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  public tab1Root = HomePage;
  public tab2Root = CartPage;
  public itemCount = 0;

  constructor(public events: Events) {}

  ionViewDidLoad() {
    this.events.subscribe(
      "cart:updated",
      count => (this.itemCount = count ? count : 0)
    );
  }
}

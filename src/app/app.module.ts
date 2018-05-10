import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpClientModule } from "@angular/common/http";
import { DetailPage } from "../pages/detail/detail";
import { CartPage } from "../pages/cart/cart";

import { IonicStorageModule } from "@ionic/storage";
import { StorageProvider } from "../providers/storage/storage";
import { UtilityProvider } from "../providers/utility/utility";
import { ApiProvider } from "../providers/api/api";

@NgModule({
  declarations: [MyApp, HomePage, TabsPage, DetailPage, CartPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, TabsPage, DetailPage, CartPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StorageProvider,
    UtilityProvider,
    ApiProvider
  ]
})
export class AppModule {}

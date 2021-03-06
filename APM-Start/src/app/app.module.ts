import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule} from '@angular/Forms';
import {ConvertoSpacesPipe} from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
      ProductListComponent,
      ConvertoSpacesPipe
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ListComponent} from "../components/list/list.component";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {ModalCreateItemComponent} from "../components/modal-create-item/modal-create-item.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ModalReadItemComponent} from "../components/modal-read-item/modal-read-item.component";
import {ModalEditItemComponent} from "../components/modal-edit-item/modal-edit-item.component";

// TODO: По-хорошему бы ввести модули для дополнительной изоляции и логического разделения по моделям.
// Но в одностраничном проекте с минимальным функционалом сосчел это излишним.
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ModalCreateItemComponent,
    ModalReadItemComponent,
    ModalEditItemComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

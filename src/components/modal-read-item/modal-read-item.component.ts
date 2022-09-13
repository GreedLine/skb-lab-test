import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {TodoItem} from "../../app/app.interfaces";

@Component({
  selector: 'app-modal-read-item',
  templateUrl: './modal-read-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalReadItemComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TodoItem) {
  }
}

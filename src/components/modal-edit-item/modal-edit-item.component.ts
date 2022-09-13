import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TodoItem} from "../../app/app.interfaces";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-create-item',
  templateUrl: './modal-edit-item.component.html',
  styleUrls: ['./modal-edit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalEditItemComponent {
  // TODO: Подобные задачи обычно делаются через формы, однако в этот раз я решил реализовать через двусторонню привязку.
  // Так я явно понял, что валидация и вывод уведомлений пользователю пишется гораздо быстрее с ними.
  // Огромный синтаксический сахар для нашего удобства. И этот пример это явно доказывает.

  minDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TodoItem
  ) {
    this.minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
  }

  isValid(): boolean {
    return this.title.length !== 0 && this.description.length !== 0
  }

  getData(): TodoItem {
    return {
      title: this.title,
      description: this.description,
      date: new Date(this.date).toLocaleDateString(),
      complete: false
    }
  }

  // TODO: Оформить бы всё это одним объектом, но это опять же лучше делать через формы.
  title: string = this.data.title;
  description: string = this.data.description;
  // TODO: По-хорошому поле дата должен быть объект, содержащий поле с полной информацием и поле для визуализации.
  date: Date = new Date(this.data.date);
  complete: boolean = this.data.complete;
}

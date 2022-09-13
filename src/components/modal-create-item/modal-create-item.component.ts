import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItem} from "../../app/app.interfaces";

@Component({
  selector: 'app-modal-create-item',
  templateUrl: './modal-create-item.component.html',
  styleUrls: ['./modal-create-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalCreateItemComponent {
  // Подобные задачи обычно делаются через формы, однако в этот раз я решил реализовать через двусторонню привязку.
  // Так я явно понял, что валидация и вывод уведомлений пользователю пишется гораздо быстрее с ними.
  // Огромный синтаксический сахар для нашего удобства. И этот пример это явно доказывает.

  minDate: Date;

  constructor() {
    this.minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
  }

  isValid(): boolean {
    return this.title.length !== 0 && this.description.length !== 0 && this.date.length !== 0
  }

  getData(): TodoItem {
    return {
      title: this.title,
      description: this.description,
      date: new Date(this.date).toLocaleDateString(),
      complete: false
    }
  }

  title: string = '';
  description: string = '';
  date: string = '';
  complete: boolean = false;
}

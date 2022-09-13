import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalCreateItemComponent} from "../components/modal-create-item/modal-create-item.component";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {TodoItem} from "./app.interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(
    public dialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly cdr: ChangeDetectorRef,
  ) {
  }

  todoListForm = this.formBuilder.group({
    items: this.formBuilder.array([
      {title: 'test', description: '4345345', date: '43534534', complete: false},
      {title: 'sdfsd', description: 'gdfgd', date: 'dfgdfg56465', complete: false},
      {title: '7678768', description: 'fdgdfg', date: 'fdgfgdfg', complete: false},
      {title: 'vvvvvvvvv', description: '434vcbcvbcvbc5345', date: '4564564576', complete: false},
    ]),
  });

  get items(): FormArray {
    return this.todoListForm.get('items') as FormArray;
  }

  newTodoItem(data: TodoItem): FormGroup {
    return this.formBuilder.group({
      title: data.title,
      description: data.description,
      date: data.date,
      complete: data.complete
    })
  }

  addNewTodoItem(data: TodoItem): void {
    this.items.push(this.newTodoItem(data))
    this.todoListForm = this.formBuilder.group({
      items: this.items,
    });
    this.cdr.detectChanges()
  }

  openDialog(): void {
    // TODO: Тут, собственно, большой вопрос и одновременно проблема этого UI-KIT'а.
    // Как только будет разрабатываться мобильная версия - придётся пилить свои модальные окна, либо искать костыль.
    const dialogRef = this.dialog.open(ModalCreateItemComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: TodoItem) => {
      // TODO: Вот тут по идее у нас должна происходить красивая обработка, а если быть точнее она должна быть в операторе в pipe.
      if (result) {
        this.addNewTodoItem(result)
      }
    });
  }
}

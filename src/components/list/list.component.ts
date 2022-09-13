import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {TodoItem} from "../../app/app.interfaces";
import {ModalReadItemComponent} from "../modal-read-item/modal-read-item.component";
import {MatDialog} from "@angular/material/dialog";
import {ModalEditItemComponent} from "../modal-edit-item/modal-edit-item.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() parentForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private readonly cdr: ChangeDetectorRef,
  ) {
  }

  // TODO: Вот, собственно, и пример работы форм. Удобно, лаконично и понятно.

  get items(): FormArray {
    return this.parentForm.get('items') as FormArray;
  }

  moveTop(index: number): void {
    const topValue = this.items.controls[index - 1].value
    const downValue = this.items.controls[index].value
    this.items.controls[index].setValue(topValue)
    this.items.controls[index - 1].setValue(downValue)
  }

  moveBottom(index: number): void {
    const topValue = this.items.controls[index].value
    const downValue = this.items.controls[index + 1].value
    this.items.controls[index].setValue(downValue)
    this.items.controls[index + 1].setValue(topValue)
  }

  completeTodo(index: number): void {
    this.items.controls[index].setValue({
      ...this.items.controls[index].value,
      complete: !this.items.controls[index].value.complete
    })
  }

  editTodo(index: number): void {
    const data = this.items.controls[index].value;
    const dialogRef = this.dialog.open(ModalEditItemComponent, {
      data
    });

    dialogRef.afterClosed().subscribe((result: TodoItem) => {
      if (result) {
        this.items.controls[index].setValue(result)
        this.cdr.detectChanges()
      }
    });
  }

  readTodo(data: TodoItem): void {
    this.dialog.open(ModalReadItemComponent, {
      data
    });
  }

  removeItem(index: number): void {
    this.items.removeAt(index)
  }

  validatorAccent(data: string): boolean {
    const currentDate = new Date()
    return new Date(data) < new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3);
  }

  validatorWarn(data: string): boolean {
    const currentDate = new Date()
    return new Date(data) <= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  }
}

import { EventEmitter } from '@angular/core';
import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() cells: { index: number; isShowed: boolean; hasItem: boolean; }[] = [];
  @Output() select = new EventEmitter();

  getSplitByRows() {
    const countRows = Math.ceil(Math.sqrt(this.cells.length));
    let result: { index: number; isShowed: boolean; hasItem: boolean; }[][] = [];

    for (let r = 0; r < countRows; r++) {
      const row = r * countRows;

      for (let i = 0; i < countRows; i++) {
        const cell = this.cells[row + i];

        if (cell === undefined) {
          break;
        }

        if (result[r] === undefined) {
          result[r] = [];
        }

        result[r].push(cell);
      }
    }

    return result;
  }

  selectCell(index: number) {
    this.select.emit(index);
  }
}

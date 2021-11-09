import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() cellData: {index?: number; isShowed?: boolean; hasItem?: boolean;} = {};
}

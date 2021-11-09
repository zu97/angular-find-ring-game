import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  cells: { index: number; isShowed: boolean; hasItem: boolean; }[] = [];
  tries = 0;

  constructor() {
    this.reStartGame();
  }

  reStartGame() {
    this.reGenerateFieldCells();
    this.tries = 0;
  }

  reGenerateFieldCells() {
    this.cells = [];

    for (let i = 0; i < 36; i++) {
      this.cells.push({index: i, isShowed: false, hasItem: false});
    }

    const itemIndex = this.getRandomNumberToFrom(this.cells.length - 1, 0);
    this.cells[itemIndex].hasItem = true;
  }

  getRandomNumberToFrom(to: number, from = 1) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  selectSell(index: number) {
    const cell = this.cells.find(cell => cell.index === index);
    if (!cell) {
      return;
    }

    this.tries++;
    cell.isShowed = true;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FieldComponent } from './game/field/field.component';
import { CellComponent } from './game/cell/cell.component';
import { ControlComponent } from './game/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    FieldComponent,
    CellComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input'; 

const MaterialComponents = [
  MatButtonModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

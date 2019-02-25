//  Our material Modules can all be managed from here
import {NgModule} from "@angular/core";
import {MatButtonModule, MatIconModule} from "@angular/material";

@NgModule({
  imports: [MatButtonModule,
    MatIconModule],
  exports: [MatButtonModule,
    MatIconModule]
})
export class MaterialModule {

}

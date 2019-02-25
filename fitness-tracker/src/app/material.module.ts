//  Our material Modules can all be managed from here
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material";

@NgModule({
  imports: [MatButtonModule],
  exports: [MatButtonModule]
})
export class MaterialModule {

}

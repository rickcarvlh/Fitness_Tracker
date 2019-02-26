//  Our material Modules can all be managed from here
import {NgModule} from "@angular/core";
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule]
})
export class MaterialModule {

}

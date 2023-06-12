import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LawsComponent} from "./components/laws/laws.component";
import {LawlistComponent} from "./components/lawlist/lawlist.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
  {path: '', component: LawsComponent},
  {path: 'lawlist', component: LawlistComponent},
  {path: 'edit/:id', component: EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

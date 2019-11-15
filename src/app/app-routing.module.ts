import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponentComponent } from "../../src/app/profile-component/profile-component.component";
import { EditComponentComponent } from "../app/edit-component/edit-component.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponentComponent },
  { path: "edit", component: EditComponentComponent },
  { path: "", redirectTo: "profile", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

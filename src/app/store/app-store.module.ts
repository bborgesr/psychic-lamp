import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EntityDataModule } from "@ngrx/data";
import { entityConfig } from "./entity-metadata";

@NgModule({
  declarations: [],
  imports: [CommonModule, EntityDataModule.forRoot(entityConfig)]
})
export class AppStoreModule {}

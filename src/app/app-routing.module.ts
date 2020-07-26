import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "recipes", loadChildren: "./recipe/recipe.module#RecipeModule" },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule",
  },
  // Modern approach ||vv
  // {
  //   path: "recipes",
  //   loadChildren: () =>
  //     import("./recipe/recipe.module").then((m) => m.RecipeModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

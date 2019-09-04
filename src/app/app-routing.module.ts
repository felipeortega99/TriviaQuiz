import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomePageModule)
  },  { path: 'game', loadChildren: './pages/game/game.module#GamePageModule' },
  { path: 'results', loadChildren: './pages/results/results.module#ResultsPageModule' },
  { path: 'highscores', loadChildren: './pages/highscores/highscores.module#HighscoresPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

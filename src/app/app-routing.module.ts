import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { ModCharacterComponent } from './mod-character/mod-character.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'add-character', component: AddCharacterComponent },
  { path: 'characters/id/:id/modify', component: ModCharacterComponent },
  { path: 'character/:id', component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

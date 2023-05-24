import { Component } from '@angular/core';
import { Character } from '../models/character';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  character: Character = {} as Character;

  constructor(private serviceService: ServiceService, private router: Router) { }

  addCharacter(){
    this.serviceService.addCharacter(this.character).subscribe({
      next: response => {
        if (response) {
          alert("Character added successfully!");
          this.character = {} as Character;
        }
      },
      error: error => {
        console.log(error);
      }
    })

  }


}

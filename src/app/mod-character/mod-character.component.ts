import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-mod-character',
  templateUrl: './mod-character.component.html',
  styleUrls: ['./mod-character.component.css']
})
export class ModCharacterComponent {

  id: number = 0;
  character: Character = {} as Character;

  constructor(private route: ActivatedRoute, private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.serviceService.getById(this.id).subscribe((data: Character) => {
        this.character = data;
      })
    });
  }

  goBack() {
    this.router.navigate(['/characters/id/' + this.id]);
  }

  updateCharacter() {
    this.serviceService.modCharacter(this.id, this.character).subscribe({
      next: response => {
        if (response) {
          alert("Character updated successfully!");
          this.goBack();
        }
      },
      error: error => {
        console.log("Something went wrong", error);
      }
    });
  }
}

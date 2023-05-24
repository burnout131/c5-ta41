import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters:any = null;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(){
    this.serviceService.getAll().subscribe(result => this.characters = result);
  }

}

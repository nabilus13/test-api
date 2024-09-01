import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.scss']
})
export class ApiSearchComponent implements OnInit{
  characters?: Character[]
  id!: string
  constructor(private apiService: ApiServiceService){}
ngOnInit(): void {
  this.apiService.getAllData().subscribe((res)=>{
    console.log(res)
    this.characters = res;

  })
}
search: any;

}

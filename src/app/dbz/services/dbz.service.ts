import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import{ v4 as uuid} from 'uuid'





@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] =[{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character:Character):void {
    const newCharacter: Character = {
      id: uuid(), ...character};

    this.characters.push(newCharacter);
  }


  // onDeletedCharacter(index:number):void{
  //   this.characters.splice(index,1);
  // }

  // OTRA FORMA DE HACER LO DE ANTES ES CON UN FILTER, QUE REGRESARÁ UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN
  // LA CONDICIÓN DE QUE EL ID NO SEA EL MISMO QUE EL QUE LE ENVIAMOS.

  deteleCharacterById(id:string) {
    this.characters = this.characters.filter(character=>character.id !== id);
    //console.log({id})
  }

}

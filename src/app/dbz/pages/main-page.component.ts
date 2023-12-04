import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

    constructor(private dbzService:DbzService){}

    //CREAMOS UN GET PARA PODER USAR LOS characters EN EL HTML, AL SER EL SERVICIO PRIVADO
    get characters(): Character[]{
      // CON LO SIGUIENTE EN VEZ DE MODIFICAR EL characters ORIGINIAL, CREO UNA COPIA DEL MISMO
      return [...this.dbzService.characters]
    }

    //EL SIGUIENTE MÉTODO SE CREA PARA PODER USARLO EN EL HTML, AL SER EL SERVICIO PRIVADO
    onDeleteCharacter( id:string):void {
      this.dbzService.deteleCharacterById( id )
    }

    onNewCharacter ( character:Character):void{
      this.dbzService.addCharacter( character)
    }



}

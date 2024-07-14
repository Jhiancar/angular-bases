import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heore',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescripcion (): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 20;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.age = 45;
  }
}

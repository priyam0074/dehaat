
 import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'orderByName',
  })
  export class OrderByNamePipe implements PipeTransform {  
    transform(items: any[]): any[] {
      return items.sort((a, b) => {
          let aLC: string = a.name.toLowerCase();
          let bLC: string = b.name.toLowerCase();
          return aLC < bLC ? -1 : (aLC > bLC ? 1 : 0);
      });
    }
  }
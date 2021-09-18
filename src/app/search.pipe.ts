import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  //   console.log(args);
  //   if(!args){
  //     return value;
  //   }
  //   return value.filter(item=> item.name.indexOf(args) > -1);
  // }

  if (!args) { return value; }
  return value.filter((item: any) => {
    for (let prop in item) {
      if (typeof item[prop] === 'string' && 
        item[prop].toLowerCase().indexOf(args.toLowerCase()) > -1) {
        return true;
      }
    }
    return false;
  });
}

}

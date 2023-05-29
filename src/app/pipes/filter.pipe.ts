import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  employees: any[]=[];
  item ! :any ;
  fs:string ='';
  filteredArray : Array<{id: number , name: string}>=[];

  transform(value: any[], filterString :string) : any[]{

    if (value.length===0) { 
      return []; 
    }

   
   
    return value.filter(item => {
      var fs =filterString.toLowerCase();
      if (item && item['name']) {
        if(item['name'].toLowerCase().includes(filterString))
               return item;
      }
      return false ;
    });

    // return value.filter((item)=>{
    //   if(item.name.indexOf(filterString)> -1){
    //     console.log(item);
    //   }
    //   // this.filteredArray.push(item);

    //   return this.filteredArray;
   
 
   }

 
  }

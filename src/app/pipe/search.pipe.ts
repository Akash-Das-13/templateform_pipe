import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'search'
})

// Implement logic to filter the given contacts based on given searchText
// Convert text to lowercase
export class SearchPipe implements PipeTransform {

  transform(contacts: any, searchText: any): any {
    if(!searchText){
      return contacts;
    }
    if(isString(searchText)){
     return contacts.filter(e=>e.name.toLowerCase().includes(searchText.toLowerCase())| e.mobile.toString().includes(searchText))
    }
    
  }


}

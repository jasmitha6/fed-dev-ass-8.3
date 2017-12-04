import { Injectable } from '@angular/core';
// defining clas DropDownService for fetching gender details.
@Injectable()
export class DropDownService {

  private genderArray: any[] = [];
  constructor() { }

  getDropDown(): any[] {
    return this.genderArray = [{
      id: 1,
      value: 'Mr'
    },
    {
      id: 1,
      value: 'Mrs'
    }
    ]
  }

}

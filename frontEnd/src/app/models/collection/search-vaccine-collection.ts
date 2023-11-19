import { SearchVaccineModel } from '../search-vaccine-model';
import { SearchVaccineInterface } from '../../interfaces';
export class SearchVaccineCollection {
  datas: SearchVaccineModel[] = [];
  constructor(datas: SearchVaccineInterface[]) {
    datas.forEach((data: SearchVaccineInterface) => {
      this.datas.push(new SearchVaccineModel(data));
    });
  }

  get all() {
    return this.datas;
  }
}

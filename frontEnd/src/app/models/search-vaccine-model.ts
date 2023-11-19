import { SearchVaccineInterface } from '../interfaces/search-vaccine-interface';
export class SearchVaccineModel {
  data: SearchVaccineInterface;
  constructor(data: SearchVaccineInterface) {
    this.data = data;
  }

  get Id() {
    return this.data.id;
  }

  get header() {
    return this.data.header;
  }

  get details() {
    return this.data.details;
  }
}

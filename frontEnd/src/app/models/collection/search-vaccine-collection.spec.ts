import { SearchVaccineCollection } from './search-vaccine-collection';
import { SearchVaccineModel } from '../search-vaccine-model';
import { SearchVaccineInterface } from '../../interfaces';

describe('SearchVaccineCollection', () => {
  let datas: SearchVaccineInterface[] = [
    {
      id: 1,
      header: 'Covid vaccine',
      details:
        "For covid, active for two years, no known adverse interactions with diabetes, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  it('should create an instance', () => {
    expect(new SearchVaccineCollection(datas)).toBeTruthy();
  });

  it('should return the correct values', () => {
    let collection = new SearchVaccineCollection(datas);
    expect(collection.all[0].Id).toEqual(datas[0].id);
    expect(collection.all[0].header).toEqual(datas[0].header);
    expect(collection.all[0].details).toEqual(datas[0].details);
  });
});

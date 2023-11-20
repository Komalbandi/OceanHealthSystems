import { SearchVaccineModel } from './search-vaccine-model';
import { SearchVaccineInterface } from '../interfaces/search-vaccine-interface';

describe('SearchVaccineModel', () => {
  const data: SearchVaccineInterface = {
    id: 1,
    header: 'Covid vaccine',
    details:
      "For covid, active for two years, no known adverse interactions with diabetes, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  it('should create an instance', () => {
    expect(new SearchVaccineModel(data)).toBeTruthy();
  });

  it('should return the correct values', () => {
    let searchVaccine = new SearchVaccineModel(data);
    expect(searchVaccine.Id).toEqual(1);
    expect(searchVaccine.header).toEqual('Covid vaccine');
    expect(searchVaccine.details).toEqual(data.details);
  });
});

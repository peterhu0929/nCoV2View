import { CovCountryInfo } from './CovCountryInfo';

export class CovCountries {
  country: string;
  countryInfo: CovCountryInfo = new CovCountryInfo();
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
}

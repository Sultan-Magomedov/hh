interface IdNamePair {
  name?: string;
}
export interface VacancyType {
  id: string;
  name: string;
  area: { name: string };
  experience: { name: string };
  employer: { name: string };
  work_format: IdNamePair[] | null;
  salary: {
    currency: string;
    from: number | null;
    to: number | null;
  } | null;
  alternate_url: string;
}

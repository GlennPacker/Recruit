module Admin.Domain {
    export interface IVacancy{
        Title: string;
        Location: string;
        VacancyType: string;
        Description: string;
        Pay: number;
        Id: number;
    }

    export class Vacancy implements IVacancy{
        public Id: number;

        constructor(public Location: string,
            public VacancyType: string,
            public Description: string,
            public Pay: number,
            public Title: string
        ) { };
    }
}
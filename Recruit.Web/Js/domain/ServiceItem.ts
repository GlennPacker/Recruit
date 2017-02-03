module Admin.Domain {
    export interface IServiceItem{
        Icon: string;
        Title: string;
        Description: string;
        Id: number;
    }

    export class ServiceItem implements IServiceItem{
        public Id: number;

        constructor(public Icon: string,
            public Title: string,
            public Description: string
        ) { };

    }

}
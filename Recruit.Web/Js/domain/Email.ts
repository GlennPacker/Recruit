module Admin.Domain {
    export interface IEmail{
        Name: string;
        ReplyEmail: string;
        Tel: string;
        Enquiry: string;
    }

    export class Email implements IEmail{
        public Name: string;
        public ReplyEmail: string;
        public Tel: string;
        public Enquiry: string;

        constructor() { };
    }
}
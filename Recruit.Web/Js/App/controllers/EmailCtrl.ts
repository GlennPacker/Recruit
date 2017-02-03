module App.EmailAdmin {

    interface IEmailCtrl {
        Msg: Admin.Domain.IEmail;
        Send(valid: boolean): void;
        Sent: boolean;
    }

    class EmailCtrl implements IEmailCtrl {
        Msg: Admin.Domain.IEmail;
        Sent: boolean;
                
        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: Admin.Common.DataAccessService) {
            this.Sent = false;
            this.Msg = new Admin.Domain.Email();   
        }

        Send(valid: boolean): void {
            if (!valid) return;            
            var emailResource = this.dataAccessService.getEmailResource();
            emailResource.save(this.Msg);
            this.Msg = new Admin.Domain.Email();
            this.Sent = true;
        }

    }

    angular.module("app").controller("EmailCtrl", EmailCtrl);
}

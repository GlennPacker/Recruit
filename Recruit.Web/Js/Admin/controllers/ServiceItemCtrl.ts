interface IServiceAdminCtrl {
    Data: any[];
    Msg: string;
    Update(): void;
}

class ServiceAdminCtrl implements IServiceAdminCtrl {
    Data: any[];
    Msg: string;
    
    constructor() {
        this.Msg = "Testing";
        this.Data = [];
    }

    Update(): void {
        // update domain object.
    };
}

angular.module("admin").controller("ServiceAdminCtrl", ServiceAdminCtrl);
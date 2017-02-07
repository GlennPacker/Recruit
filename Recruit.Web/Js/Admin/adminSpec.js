describe("productCtrl", function () {
    var res;
    var ctrl;
    var apiResource;
    var serviceResource;
    beforeEach(function () {
        module('common.services');
        module('app');
        inject(function ($controller, $q, $sce) {
            apiResource = {
                Data: {
                    get: function () { }
                }
            };
            spyOn(apiResource.Data, 'get');
            serviceResource = {
                Helper: {
                    DisplayDate: function (value) {
                        serviceData = value;
                    }
                },
                State: {
                    params: {
                        id: 1,
                        db: 'db',
                        tab: 'tab',
                    },
                    current: {
                        name: 'productName'
                    },
                    go: function () { }
                }
            };
            spyOn(serviceResource.Helper, 'DisplayDate');
            spyOn(serviceResource.State, 'go');
            ctrl = $controller('productCtrl', { '$sce': $sce, 'apiResource': apiResource, 'serviceResource': serviceResource });
        });
    });
    it('constructs ok', function () {
        expect(ctrl).toBeDefined();
    });
    it('should be able to go back', function () {
        expect(ctrl.goBack).toBeDefined();
        ctrl.goBack();
        expect(serviceResource.State.go).toHaveBeenCalled();
    });
    //it('must have service defined and hooked up', function () {
    //    expect(ctrl.displayDate).toBeDefined();
    //    ctrl.displayDate();
    //    expect(serviceResource.Helper.DisplayDate).toHaveBeenCalled();
    //});
    it('must get parameters from service', function () {
        expect(ctrl.id).toBe(1);
        expect(ctrl.db).toBe('db');
        expect(ctrl.tab).toBe('tab');
        expect(ctrl.product).toBe('productName');
    });
    it('must get data from api', function () {
        expect(apiResource.Data.get).toHaveBeenCalled();
        expect(ctrl.data).toBeDefined();
    });
});

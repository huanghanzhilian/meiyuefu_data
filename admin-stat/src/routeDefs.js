/**
 * routeDefs.js 路由定义
 * @description 该app为SPA，single page application
 * 路由完全有前端控制，此处配置**路由**
 */
define(['app'], function(app) {
    /**
     * register `routeDefs`
     *
     */
    app.registerProvider('routeDefs', [
        '$stateProvider',
        '$urlRouterProvider',
        '$couchPotatoProvider',
        function($stateProvider, $urlRouterProvider, $couchPotatoProvider) {
            this.$get = function() {
                // this is a config-time-only provider
                // in a future sample it will expose runtime information to the app
                return {};
            };
            // $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('index/systemOne/welcome');

            // a uniform empty tpl for inherit
            var emptyTplInherit = '/static-stat/empty-tpl-inherit.html';

            $stateProvider
                .state('index', {
                    url: '/index',
                    views: {
                        '': {
                            templateUrl: '/static-stat/tpls3/index.html'
                        },
                        'topbar@index': {
                            templateUrl: '/static-stat/tpls3/topbar.html'
                        },
                        'main@index': {
                            templateUrl: '/static-stat/tpls3/home.html',
                        }
                    }
                })


                //欢迎来到放贷
                //
                .state('index.systemOne', {
                    url: '/systemOne',
                    views: {
                        'topbar@index': {
                            templateUrl: '/static-stat/tpls3/topbar.html'
                        },
                        'main@index': {
                            templateUrl: '/static-stat/tpls3/home.html',
                        }
                    }
                })
                .state('index.systemOne.welcome', {
                    url: '/welcome',
                    templateUrl: function(stateParams){
                        return '/static-stat/welcome/welcome.html';
                    }
                })

                 //合作伙伴详情
                .state('index.systemOne.company', {
                    url: '/company',
                    abstract: true,
                    templateUrl: emptyTplInherit
                }).state('index.systemOne.company.list', {
                    url: '?companyKey&cityKey&pageNum',
                    templateUrl: '/static-stat/company/company.html',
                    controller: 'CtrlCompany',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/company/company.js'])
                    }
                })
                .state('index.systemOne.company.add', {
                    url: '/add',
                    templateUrl: '/static-stat/company-detail/company-detail.html',
                    controller: 'CtrlCompanyDetail',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/company-detail/company-detail.js'])
                    }
                })
                .state('index.systemOne.company.detail', {
                    url: '/{companyId:[0-9]+}?type',
                    templateUrl: '/static-stat/company-detail/company-detail.html',
                    controller: 'CtrlCompanyDetail',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/company-detail/company-detail.js'])
                    }
                })
                .state('index.systemOne.OutlierDetection', {
                    url: '/OutlierDetection?pageNum',
                    templateUrl: '/static-stat/OutlierDetection/OutlierDetection.html',
                    controller: 'CtrlOutlierDetection',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/OutlierDetection/OutlierDetection.js'])
                    }
                })
                .state('index.systemOne.Riskmigration', {
                    url: '/Riskmigration?pageNum',
                    templateUrl: '/static-stat/Riskmigration/Riskmigration.html',
                    controller: 'CtrlRiskmigration',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/Riskmigration/Riskmigration.js'])
                    }
                })
                .state('index.systemOne.RelationalAnomaly', {
                    url: '/RelationalAnomaly?id&filtername&graphLevel',
                    templateUrl: '/static-stat/RelationalAnomaly/RelationalAnomaly.html',
                    controller: 'RelationalAnomaly',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/RelationalAnomaly/RelationalAnomaly.js'])
                    }
                })


                //欢迎来到收租
                .state('index.systemTow', {
                    url: '/systemTow',
                    views: {
                        'topbar@index': {
                            templateUrl: '/static-stat/tpls3/topbar2.html'
                        },
                        'main@index': {
                            templateUrl: '/static-stat/tpls3/home.html',
                        }
                    }
                })
                .state('index.systemTow.welcome', {
                    url: '/welcome',
                    templateUrl: function(stateParams){
                        return '/static-stat/welcome/welcome2.html';
                    }
                })


                //合作伙伴详情
                .state('index.systemTow.company', {
                    url: '/company',
                    abstract: true,
                    templateUrl: emptyTplInherit
                }).state('index.systemTow.company.list', {
                    url: '?companyKey&cityKey&pageNum',
                    templateUrl: '/static-stat/company-2/company.html',
                    controller: 'CtrlCompany-2',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/company-2/company.js'])
                    }
                })
                .state('index.systemTow.company.add', {
                    url: '/add',
                    templateUrl: '/static-stat/company-detail-2/company-detail.html',
                    controller: 'CtrlCompanyDetail-2',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/company-detail-2/company-detail.js'])
                    }
                })
                .state('index.systemTow.company.detail', {
                    url: '/{companyId:[0-9]+}?type',
                    templateUrl: '/static-stat/company-detail-2/company-detail.html',
                    controller: 'CtrlCompanyDetail-2',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/company-detail-2/company-detail.js'])
                    }
                })
                .state('index.systemTow.OutlierDetection', {
                    url: '/OutlierDetection?pageNum',
                    templateUrl: '/static-stat/OutlierDetection-2/OutlierDetection.html',
                    controller: 'CtrlOutlierDetection-2',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/OutlierDetection-2/OutlierDetection.js'])
                    }
                })
                .state('index.systemTow.Riskmigration', {
                    url: '/Riskmigration?pageNum',
                    templateUrl: '/static-stat/Riskmigration-2/Riskmigration.html',
                    controller: 'CtrlRiskmigration-2',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/Riskmigration-2/Riskmigration.js'])
                    }
                })
                .state('index.systemTow.RelationalAnomaly', {
                    url: '/RelationalAnomaly?id&filtername&graphLevel',
                    templateUrl: '/static-stat/RelationalAnomaly-2/RelationalAnomaly.html',
                    controller: 'RelationalAnomaly-2',
                    resolve: {
                        ctrl: $couchPotatoProvider.resolveDependencies(['/static-stat/RelationalAnomaly-2/RelationalAnomaly.js'])
                    }
                })





        }
    ]);
    //end for define
});
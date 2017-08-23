define(["app","dict.cities","directive/jrDatepicker","directive/jrDropdownButton","directive/jrCitySelect","directive/jrPlaceholder","directive/jrPagination"],function(app,citiesModule){app.registerController("CtrlCompanyDetail-2",["$scope","$http","$state","$stateParams","$modal",function($scope,$http,$state,$stateParams){function getData(params){$scope.loading=!1,$http.get("/shouzu/stat/company/json/get/getCompanyInfo",{params:$.extend({},params,{optDesc:"合作伙伴详情"})}).success(function(data){$scope.orders=data.object,$scope.loading=!0})}$scope.queryParams=$.extend({type:"show",companyId:""},$stateParams),$scope.queryParams.companyId||($scope.queryParams.type="add"),$scope.queryOptions={bankName:[],isPublic:[{value:"1",name:"对公"},{value:"0",name:"对私"}],canYuefu:[{value:"1",name:"是"},{value:"0",name:"否"}],qingtuiReturnServiceMoney:[{value:"1",name:"是"},{value:"0",name:"否"}],companyProvinceCode:citiesModule.get_provinces_from_dict(),companyCityCode:citiesModule.get_cities_by_code_from_dict("110000"),provinceCode:citiesModule.get_provinces_from_dict(),cityCode:citiesModule.get_cities_by_code_from_dict("110000")},$scope.orders={company:{id:-1},companyMore:{id:-1,maxLoanMonth:"12",minLoanMonth:"3",maxAgentNum:"50",faceMatchPassRate:"0.6",faceMatchRefuseRate:"0.6",withdrawFeeRate:"0.4",minFeeMoney:"300",loanMonthRate:"4",profitRate:"50",yuefuMaxRate:"10",yuefuMaxMoney:"600000",canYuefu:"1",qingtuiReturnServiceMoney:"1",maxYuefuMonth:"3",overdueRate:"0",companyProvinceCode:"110000",province:"北京市",companyCityCode:"110100",city:"北京市"},companyRelation:{maxMonthRent:"3000",sys_rentStartDateSection:"10-33"},bankcard:{id:-1,provinceCode:"110000",provinceName:"北京市",cityCode:"110100",cityName:"北京市",isPublic:"0"}},"add"!=$scope.queryParams.type&&getData($scope.queryParams),$scope.changeself=function(){var newValue=$scope.orders.bankcard.bankName;$http.get("/shouzu/stat/company/json/get/getBankName",{params:{keyword:newValue}}).success(function(data){$scope.queryOptions.bankName=data.object})},$scope.blurself=function(){setTimeout(function(){$scope.queryOptions.bankName=[]},200)},$scope.selectbankName=function(text){$scope.orders.bankcard.bankName=text,$scope.queryOptions.bankName=[]},$scope.save=function($event){if($($event.target).data("disabled"))return!1;$($event.target).data("disabled",!0),setTimeout(function(){$($event.target).data("disabled",!1)},3e3);var data={};for(var k in $scope.orders)data[k]=JSON.stringify($scope.orders[k]);var params=$.extend(data,{optDesc:"保存合作伙伴信息"});$http.post("/shouzu/stat/company/json/operate/saveAgentCompany",$.param(params)).success(function(data){data.success&&$.modalAlert(data.message,function(){window.close(),window.opener.location.reload()})})},"show"!=$scope.queryParams.type&&($scope.$watch("orders.companyMore.companyProvinceCode",function(val,nval){val!=nval&&($scope.queryOptions.companyCityCode=citiesModule.get_cities_by_code_from_dict(val),$scope.orders.companyMore.province=$("#companyProvinceCode .displayName").text())}),$scope.$watch("orders.companyMore.companyCityCode",function(val,nval){val!=nval&&($scope.orders.companyMore.city=$("#companyCityCode .displayName").text())}),$scope.$watch("orders.bankcard.provinceCode",function(val,nval){val!=nval&&($scope.queryOptions.cityCode=citiesModule.get_cities_by_code_from_dict(val),$scope.orders.bankcard.provinceName=$("#provinceCode .displayName").text())}),$scope.$watch("orders.bankcard.cityCode",function(val,nval){val!=nval&&($scope.orders.bankcard.cityName=$("#provinceCode .displayName").text())}))}])});
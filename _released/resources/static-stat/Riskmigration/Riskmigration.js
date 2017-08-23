define(["app","echarts","directive/jrDatepicker","directive/jrDropdownButton"],function(app){app.registerController("CtrlRiskmigration",["$scope","$rootScope","$http","$modal","$state","$stateParams","$filter","FileUploader",function($scope){var dataMap={date:["2017-02-11","2017-02-12","2017-02-13","2017-02-14","2017-02-15","2017-02-16","2017-02-17","2017-02-18","2017-02-19","2017-02-20","2017-02-21","2017-02-22","2017-02-23","2017-02-24","2017-02-25","2017-02-26","2017-02-27","2017-02-28","2017-03-01","2017-03-02","2017-03-03","2017-03-04","2017-03-05","2017-03-06","2017-03-07","2017-03-08","2017-03-09","2017-03-10","2017-03-11","2017-03-12"],data:[{list:[2,1,2,2,1,2,2,1,2,2,1,1,2,1,1,2,2,1,2,2,2,2,1,1,1,2,3,2,2,2],name:"QT001"},{list:[1,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,1,2,2,2,2,2,2,2,2,3,2,2,2,2],name:"QT002"},{list:[2,2,1,1,2,2,2,1,2,2,2,1,1,1,3,3,3,3,2,3,3,3,3,3,2,2,4,4,4,4],name:"QT003"},{list:[2,1,2,1,2,1,2,1,1,2,1,1,1,1,2,2,2,2,2,2,3,4,3,4,3,4,4,4,4,4],name:"QT004"},{list:[2,1,1,2,2,2,2,2,2,1,2,1,1,1,1,2,2,2,2,2,3,4,3,4,3,3,3,3,4,4],name:"QT005"},{list:[1,1,2,1,1,2,2,1,1,2,1,1,1,2,1,1,2,2,2,2,3,3,4,3,4,3,3,3,4,4],name:"QT006"},{list:[1,1,2,1,2,2,2,2,1,1,2,1,2,2,2,2,2,2,2,2,3,4,3,3,4,4,3,4,4,3],name:"QT007"},{list:[2,1,1,2,2,1,1,2,1,1,1,1,1,2,2,1,2,2,2,2,3,4,3,3,3,4,3,3,3,3],name:"QT008"},{list:[1,1,1,1,2,2,1,2,1,2,1,1,1,2,2,2,2,2,2,2,1,1,2,2,2,3,2,2,2,3],name:"YQ001"},{list:[2,1,2,2,1,1,2,2,1,1,1,1,2,2,2,1,2,2,1,1,2,2,2,2,2,2,2,2,1,2],name:"YQ002"},{list:[2,1,1,1,2,2,2,2,2,1,2,1,1,2,2,2,2,2,2,2,3,3,3,4,4,4,4,3,3,4],name:"YQ003"},{list:[2,1,2,2,1,2,1,2,1,1,2,2,2,1,1,2,2,2,2,2,3,3,4,4,4,3,3,4,3,4],name:"YQ004"},{list:[1,1,1,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,2,2,2,1,2,2,3,3,3,3,2,2],name:"YQ005"},{list:[2,1,1,1,2,2,2,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,4,4,3,3,3,3,3,4],name:"YQ006"},{list:[2,2,1,2,1,2,1,2,1,2,1,1,1,2,2,2,2,2,2,3,3,4,3,4,4,4,3,3,3,4],name:"YQ007"},{list:[2,1,2,2,2,1,2,1,2,2,1,2,2,2,2,2,2,2,3,3,3,3,4,3,4,3,4,4,5,5],name:"YQ008"},{list:[1,2,1,2,2,2,1,2,1,1,2,2,2,1,2,2,2,2,2,3,3,3,3,4,3,4,4,4,4,4],name:"YQ009"},{list:[1,2,1,1,2,1,1,1,1,1,2,2,2,3,2,2,2,3,2,3,4,4,3,3,4,4,4,4,5,5],name:"YQ010"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3],name:"LV001"},{list:[1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],name:"LV002"},{list:[1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2],name:"LV003"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3],name:"LV004"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3],name:"LV005"},{list:[1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2],name:"LV006"},{list:[3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4],name:"LV007"},{list:[3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],name:"FK001"},{list:[3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4],name:"FK002"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],name:"FK003"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],name:"FK004"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],name:"FK005"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],name:"FK006"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],name:"FK007"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],name:"FK008"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4],name:"GJ001"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4],name:"GJ002"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4],name:"GJ003"},{list:[2,2,1,2,1,1,2,1,2,2,2,1,2,2,2,2,2,1,1,1,1,2,1,1,1,1,2,2,2,2],name:"GJ004"},{list:[2,1,1,2,1,1,2,1,1,2,2,1,1,2,1,1,1,2,1,1,2,2,1,1,2,2,2,2,1,2],name:"FR001"},{list:[2,2,2,2,1,2,2,1,2,2,2,2,1,1,2,2,1,2,1,1,3,3,3,3,3,3,3,3,3,3],name:"FR002"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4],name:"FK009"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],name:"FK010"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],name:"FK011"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],name:"FK012"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4],name:"FK013"},{list:[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],name:"FK014"},{list:[1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3],name:"FK015"},{list:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],name:"HK001"},{list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3],name:"HK002"}]};$scope.colorArr=["","#ededed","#d4d4d4","#a89a8f","#fed158","#fd0000"],$scope.data=dataMap.data}])});
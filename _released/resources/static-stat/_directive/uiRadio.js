define(["app"],function(app){app.registerDirective("uiRadio",[function(){return{restrict:"E",replace:!0,transclude:!0,template:'<span class="ui-radio" ng-class="{checked: checked}" ng-click="check($event)"><input type="radio" ng-checked="{{checked}}" name="{{name}}" /><i class="icon"></i>{{text}}</span>',scope:{name:"@",text:"@",checked:"@"},link:function($scope,iElement){var $radio=iElement.find("input");$scope.check=function(){var checked=!$radio[0].checked;$scope.checked=checked,$radio.prop("checked",checked)}}}}])});
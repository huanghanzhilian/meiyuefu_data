define(["app"],function(app){app.registerDirective("uiVideo",["$window","$compile",function($window,$compile){var zoomer=null,zoomwp=null,video=null,_playZoomer=function(scope){var $win=angular.element($window),item=scope.item;if($("#zoomVideo").size()>0)zoomer.show(),video[0].play();else{$body=angular.element("body"),zoomwp=angular.element('<div class="zoomer"></div>');var content=angular.element('<div class="content"><video src="'+item.attachmentUrl+'" controls="controls" autoplay="autoplay"></video></div>');zoomwp.html(content),zoomer=$compile($.parseHTML('<div id="zoomVideo" class="zoom" ng-click="hideZoomer($event, item)"><a class="close"></a></div>'))(scope),zoomer.show(),zoomer.append(zoomwp),$body.append(zoomer),video=$("video",content),content.click(function(event){event.stopPropagation(),event.preventDefault()}),video.on("loadeddata",function(){var win_height=$win.height(),win_width=$win.width();item.width=content.width(),item.height=content.height();var width=item.width,height=item.height;(item.width>win_width||item.height>win_height)&&(item.width/item.height>win_width/win_height?(width=win_width,height=width/item.width*item.height):(height=win_height,width=height/item.height*item.width));var offset_left=(win_width-width)/2,offset_top=(win_height-height)/2;item._width=width,item._height=height,item._offset_left=offset_left,item._offset_top=offset_top,content.css({width:width,height:height,left:offset_left,top:offset_top}).show()})}};return{restrict:"E",replace:!0,transclude:!0,template:"<video></video>",link:function(scope,element){var item=scope.item;element.attr("src",item.attachmentUrl),element.click(function(){_playZoomer(scope)}),scope.hideZoomer=function(){zoomer.hide(),video[0].pause()}}}}])});
//获取加载进度
(function(wlmf) {
    var images = {
            'home': 6
        },
        loadImages = function(callback) {
            var count = 0,
                keys = [],
                item;
            for (item in images) {
                if (images.hasOwnProperty(item) && images[item]) {
                    keys.push(item);
                    count += images[item];
                }
            }
            var j = 1,
                img,
                loadedCount = 0,
                afterLoad = function() {
                    callback(++loadedCount, count);
                };
            for (var i = 0, len = keys.length; i < len; i++) {
                j = 1;
                while (images[keys[i]] >= j) {
                    img = new Image();
                    img.src = images[keys[i] + '-' + j];
                    if (img.complete) {
                        afterLoad();
                    } else {
                        img.onload = afterLoad;
                        img.onerror = afterLoad;
                    }
                    j++;
                }
            }
        };
    wlmf.loadImages = loadImages;
})(window.wlmf || (window.wlmf = {}));
Zepto(function($) {
    wlmf.loadImages(function(loadedCount, count) {
        var percent = (loadedCount / count).toFixed(2);
        percent > 1 && (percent = 1);
        percent = percent * 100 + '%';
        $('.icon-home-3').html(percent);
    });
});

// /*******************************
//  * @Copyright:万人马拉松
//  * @Creation date:2015.5.13
//  *******************************/
// Zepto(function($){
//    //区块链接跳转
//    $('*[data-href]').on('tap',function(){
//      window.location.href=$(this).attr('data-href');
//    });
//   //返回上一步
//   $('*[data-rel=goback]').on('tap',function(){
//       history.go(-1);
//   });
//   //分享提示
//   $('*[data-rel=sharetips]').on('tap',function(){
//       if($('.share-tips').length<1){
//           $('body').append('<div class="share-tips"><img src="mobi/img/share-tips.png" alt="" /></div>');
//       }
//       $('.share-tips').show();
//       $('.share-tips').on('tap',function(){
//           $('.share-tips').remove();
//       });
//   });

//  function LoadImages(sources, callback){
//       var count = 0,
//           images ={},
//           imgNum = 0;
//       for(src in sources){
//           imgNum++;
//       }
//       for(src in sources){
//           images[src] = new Image();
//           images[src].onload = function(){
//               if(++count >= imgNum){
//                   callback(images);
//               }
//           }
//           images[src].src = sources[src];
//       }
//     }

//     var loader=$('.loader');
//     var home=$('#home');
//     LoadImages(['mobi/img/bg-blue.png','mobi/img/bg-body.jpg','mobi/img/btn-choujiang.png','mobi/img/btn-gm.png','mobi/img/btn-hxm.png','mobi/img/btn-invite.png','mobi/img/btn-pdl.png','mobi/img/btn-qdj.png','mobi/img/btn-wyy.png','mobi/img/btn-xuanyao-green.png','mobi/img/btn-xuanyao.png','mobi/img/btn-yqp.png','mobi/img/icon-duoren.png','mobi/img/icon-home-1.png','mobi/img/icon-home-2.png','mobi/img/icon-home-3.png','mobi/img/icon-nannv.png','mobi/img/icon-ren.png','mobi/img/icon-road.png','mobi/img/icon-rule.png','mobi/img/road-1.png','mobi/img/road-2.png','mobi/img/road-3.png','mobi/img/road-4.png','mobi/img/road-5.png','mobi/img/road-6.png','mobi/img/road-7.png','mobi/img/road-8.png','mobi/img/road-9.png','mobi/img/road-10.png','mobi/img/road-bg.png','mobi/img/road-point.png','mobi/img/rule-bottom.png','mobi/img/rule-top.png','mobi/img/title-jiayou.png','mobi/img/zhongjiang-t.png'],function(){
//       setTimeout(function(){
//         loader.hide();
//         home.show();
//       },200);
//     });
//     //滑动小人开始游戏
//     var iconhome3=$('.icon-home-3');
//     iconhome3.on('touchstart',function(){
//         window.location.href=$(this).attr('data-start');
//     });
//     //查看更多记录
//     var recordMore=$('.record-more');
//     var J_recordItem=$('#J_recordItem');
//     recordMore.on('tap',function(){
//         var self=this;
//         var page=$(self).attr('data-page');
//         $(self).prop('disabled',true).text('努力加载中');
//         $.post('xxx',{page:page},function(data){
//             /*
//             status:200
//             newpage:数值，返回当前返回的记录数所在的页码
//             total:数值，总页数
//             records:记录信息
//             message:反馈消息
//             */
//             if(data.status==200){
//                 if(data.total==data.newpage){
//                     $(self).remove();
//                 }else{
//                     $(self).attr('data-page',data.newpage);
//                     J_recordItem.append(data.records);
//                 }
//             }else{
//                 alert(data.message);
//             }
//             $(self).prop('disabled',false).text('加载更多');
//         },'json');
//     });
//     //提交手机号
//     var phone=$('#phone');
//     var J_choujiang=$('#J_choujiang');
//     J_choujiang.on('tap',function(){
//         var pv=$.trim(phone.val());
//         var self=this;
//         if(pv==''){
//             alert('手机号不能为空！');
//             return false;
//         }else if(!/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/.test(pv)){
//             alert('手机号格式不正确！');
//             return false;
//         }else{
//             $(self).prop('disabled',true);
//             $.post('xxx',{phone:pv},function(data){
//                 if(data.status==200){
//                     window.location.href=data.url;
//                 }else{
//                     alert(data.message);
//                 }
//                 $(self).prop('disabled',false);
//             },'json');
//         }
//     });



//  });

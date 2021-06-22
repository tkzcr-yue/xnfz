var title_template = `<div class="jn_header clearfix">
        <a class="logo" href="javascript:;"><img src="images/jn_logo.png" alt="" /></a>
        <a class="login" href="javascript:;">登录</a>
        <a target="_blank" href="http://www.fzphx.com/Project/2020/gjh/" class="enter" style="display: none; position: absolute; right: 125px; top: 35px;">进入实验</a>
        <ul>
             <li><a class="num1" href="./index.html">首页</a></li>
             <li><a class="num2" href="./voice.html">智能评测</a></li>
             <li><a class="num3" href="./describe.html">项目介绍</a></li>
             <li><a class="num4" href="./team.html">教学团队</a></li>
             <li><a class="num5" href="./download.html">教学资源下载</a></li>
             <!--<li><a class="enter" style="display:none;" href="javascript:;">进入实验</a></li>-->
        </ul>
        </div>`

var footer_template = `<div><div class="jn_footer">
      <div class="w1200">
           <div class="jn_footer_logo"><img src="images/jn_logo2.png" alt=""/></div>
           <div class="clearfix">
             <ul>
                     <li><span>快捷导航</span>
                         <b><a href="javascript:;">首页</a></b>
                         <b><a href="javascript:;">智能评测</a></b>
                         <b><a href="javascript:;">项目介绍</a></b>
                         <b><a href="javascript:;">教学团队</a></b>
                         <b><a href="javascript:;">教学资源下载</a></b>
                         <b><a href="javascript:;">管理后台</a></b>
                     </li>
                     <li><span>联系我们</span>
                         <b>地址：中国 广州市 黄埔大道西601号</b><b>邮编：510632</b>
                         <b>电话：0791-236545896</b>
                         <b>© 暨南大学 2020-2023</b>
                    </li>
                    <li><span>留言给我们</span>
                         <b><a href="javascript:;">在线留言</a></b>
                    </li>
             </ul>
                <div class="jn_footer_code"><img src="images/jn_23.jpg" width="121" height="122" alt=""/><span>手机扫码<br>“快捷体验学习”</span></div>
                <div class="jn_footer_code"><img src="images/jn_22.jpg" width="121" height="122" alt=""/><span>扫码关注<br>“虚拟仿真教学中心”</span></div>
           </div>
      </div>
      </div>
  <div class="jn_footer2">粤ICP备 12087612号<img src="images/jn_24.png" alt=""/>粤公网安备 44010602001461号</div>
  </div>`

var config = function () {
    return {
        PushAudioUrl: "https://api.virtual.weihuadrive.com/api/ilab/PushAudio"
    };
}

$(document).ready(function () {

    //特色项目
    //jQuery('.jn_features').slide({titCell:'.hd li', mainCell:'.bd',effect:'leftLoop',autoPlay:true,interTime:3000,pnLoop:false});
    //教学团队
    jQuery('.jn_team2').slide({
        mainCell: '.clearfix',
        effect: 'leftLoop',
        vis: 4,
        autoPlay: true,
        interTime: 3000,
        pnLoop: false,
        startFun: function (i, c) {
            $(".jn_team2 .jn_team_page b").text(i + 1);
            $(".jn_team2 .jn_team_page i").text(c);
        }
    });
    //应用推广证明
    jQuery('.jn_proof').slide({
        mainCell: '.clearfix',
        effect: 'leftLoop',
        vis: 4,
        autoPlay: true,
        interTime: 3000,
        pnLoop: false,
        startFun: function (i, c) {
            $(".jn_proof .jn_team_page b").text(i + 1);
            $(".jn_proof .jn_team_page i").text(c);
        }
    });
    //收起动画
    //  $('.jn_header .enter').css('margin-top','-100px');
    //  $('.jn_cartoon').slideUp(2000);
    //  setTimeout(function(){
    //      $('body').removeClass('bgimg');
    // 	 $('.jn_header').addClass('jn_header2')
    // 	 $('.jn_header .enter').animate({marginTop:'-15px'},"slow");
    //  },2000);

    //登录
    $('.jn_header .login').on('click', function () {
        $('.blacklayer').show();
        $('.login_layer').show();
    });
    //关闭登录框
    $('.blacklayer').on('click', function () {
        $('.blacklayer').hide();
        $('.login_layer').hide();
    });
    //导航栏置顶
    $(window).scroll(function () {
        var scroH = $(this).scrollTop();
        if (scroH >= 120) {
            $('.jn_header').css('background-color','#fff');
            $('.jn_header').css('box-shadow','3px 7px 40px rgba(0,87,172,.09)');
            $('.enter').fadeIn("slow");
        } else {
            $('.jn_header').removeAttr('style');
            $('.enter').fadeOut("slow");
        }
    })
});
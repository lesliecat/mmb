/**
 * Created by jj on 2017/11/6.
 */
$(function(){

    $.ajax({
      type:"get",
      url:"http://192.168.32.79:9090/api/getcategorytitle",
      datatype:"json",
      success:function(data){
        console.log(data);
        var html = template("tpl",data);
        console.log(html);
        $('ol').html(html);
        var len=data.result.length;


        //获取标题JQ对象
          var $dts=$('ol ').children('dt');
        //设置索引
        var index=0;
        for(var i=0;i<$dts.length;i++){
          $dts[i].setAttribute('idx',index);

          // var idx=parseInt(index);
          $dts[i].addEventListener("click",function(){
            var titleid=this.getAttribute('idx');
            console.log(titleid);
            $.ajax({
              type:"get",
              url:"http://192.168.32.79:9090/api/getcategory",
              data:{
                titleid:titleid
              },
              success:function(data){
                var html = template('tpl2',data)
                console.log(html);
                console.log(this);
                $('ol dd').eq(titleid).html(html).toggle();

              }
            })
          })
          index++
        }
      }

    })

})
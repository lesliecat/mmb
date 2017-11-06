/**
 * Created by jj on 2017/11/5.
 */
$(function(){

  $.ajax({
    type:"get",
    url:"http://192.168.32.79:9090/api/getindexmenu",
    datatype:"json",
    success:function(data){
    console.log(data);

      var html=template("tpl",data);
      $('.nav ul').html(html);
    }
  });

  $.ajax({
    type:"get",
    url:"http://192.168.32.79:9090/api/getmoneyctrl",
    datatype:"json",
    success:function(data){
      console.log(data);
      var html=template("tpl2",data);
      $('.product ul').html(html);
    }

  });









})
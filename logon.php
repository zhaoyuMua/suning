<?php
$a=$_POST["user"];
$b=$_POST["pass"];
$arr=array("zhaoyu","jingjing","huanhuan");
$arr2=array("zhaoyu"=>"123","jingjing"=>"123","huanhuan"=>"123");
if(in_array($a,$arr)){
    if($arr2[$a]==$b){   
        // 密码匹配
        echo '{"code":2}';
    }else{
        // 用户名存在 密码错误
        echo '{"code":1}';
    }
}else{
  // 用户名不存在
  echo '{"code":0}';
}
?>
var flare_data ={};
var result = $.ajax({
url: 'd3/user-json.json', 
dataType: 'JSON',
type: 'get',
async:false,
success: function(){
  console.log("success");

}
});

//读取JSON文件
flare_data = eval('('+result.responseText+')');

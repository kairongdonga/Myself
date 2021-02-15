if ($response.statusCode != 200) {
  $done(null);
}

var city0 = "高谭市";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
    if (para.length<6) {
      return para
    } else {
      return para.slice(0,5)
    }
  
  } else
  {
  return city0

  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body)["data"];
flags.get(obj['country']):"🏴‍☠️"
var title =  +''+ City_ValidCheck(obj['province'])+'';
var subtitle =  "🐶 "+ ISP_ValidCheck(obj['isp']) + " ➠ "+ obj['country'];
var ip = obj['addr']; 
var description = '服务商:'+obj['isp'] + '\n'+'定位: [' +obj["latitude"]+","+obj["longitude"]+"]"+ '\n' + 'IP:'+ obj['addr'] + '\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});
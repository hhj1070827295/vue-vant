let millionDeal=(value)=>{//过万处理
  let num;
 if(value > 9999){//大于9999显示x.xx万
    num=(Math.floor(value/1000)/10)
    if(num<999){
      num =(Math.floor(value/1000)/10)+'w'
    }else{
      num =999+'w+'
    }
 }else if( value < 9999 && value>-9999){
   num=value
 }else if(value<-9999){//小于-9999显示-x.xx万
    num = -(Math.floor(Math.abs(value)/1000)/10)+'W'
 }else if(value==9999){
  num=value
}
 return num;
}


// 时间戳转为时间
export const timestampToTime=(timestamp, haveminute)=>{
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "年";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "月";
  var D = date.getDate() + "日";
  var h = date.getHours() + ":";
  var m =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  if (haveminute == 1) {
    return Y + M + D + h + m;
  } else {
    return Y + M + D;
  }
}

export { millionDeal }

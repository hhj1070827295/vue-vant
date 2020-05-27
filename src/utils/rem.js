// 移动端rem自适应计算规范
window.onload = function () {
  calcRem();
};
window.onresize = function () {
  calcRem();
};
function calcRem(){
  let bodyWidth = document.getElementsByTagName('body')[0].clientWidth;
  let html = document.getElementsByTagName('html')[0];
  //自适应最大宽度限制，避免页面资源展示失真
  if (bodyWidth >= 750){
      html.style.fontSize = 100 + 'px';
      return
  }
  let scale = bodyWidth / 750;
  html.style.fontSize = scale * 100 + 'px';
}

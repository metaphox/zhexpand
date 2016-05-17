var stoppedEh = true;
var imout = null;

function zhexpandall(){
    if(stoppedEh) return;
    var expandbtns = document.querySelectorAll('a.toggle-expand');
    for(var i = 0; i < expandbtns.length; i++){ expandbtns[i].click(); }
    var morebtn = document.querySelector('a[class$="-button-more"]');
    if(morebtn){
        window.scrollTo(0,document.body.scrollHeight);
        if(morebtn.getAttribute('class').indexOf('loading') < 0){
            morebtn.click();
        }
        imout = setTimeout(zhexpandall, 3000);
    }
}

function toggleExpand(){
    if(stoppedEh){
        stoppedEh = false;
        zhexpandall();
        document.querySelector('a#clicktoexpandemall').innerHTML = '[ / ]';
    }else{
        stoppedEh = true;
        clearTimeout(imout);
        document.querySelector('a#clicktoexpandemall').innerHTML = '[ + ]';
    }
}

function daBtn(){
    var div = document.createElement("div");
    div.innerHTML = '<a id="clicktoexpandemall" href="#">[ + ]</a>';
    div.style.position = 'fixed';
    div.style.right = '20px';
    div.style.top = '55px';
    div.style.zindex = '1024';
    document.getElementsByTagName('body')[0].appendChild(div);
    document.querySelector('a#clicktoexpandemall').addEventListener(
        'click', toggleExpand
    );
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(daBtn);

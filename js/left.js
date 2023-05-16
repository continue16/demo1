

let list=document.querySelectorAll('.list');
for(let i=0;i<list.length;i++){
    list[i].onclick=function (){
        /* 取消*/
        let j=0;
        while(j<list.length){
            list[j++].className='list';
        }
        list[i].className='list hh ';
    }
}
let out=document.querySelector('.out');

let left=document.querySelector('.left');
out.onclick=function (){
    out.classList.toggle('hh');
    left.classList.toggle('hh');
}




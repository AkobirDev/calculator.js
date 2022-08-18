let input = document.querySelector('.input');
let btn = document.querySelectorAll('button').forEach(function(item){
    item.addEventListener('click',function(e){
      let belgi = e.target.textContent;
      
      if(input.value.length == 11){
          input.value = belgi;
      }
      else if(belgi == 'C'){
          input.value = '';
      }
      else if(belgi == '+'){
          input.value += '+';
      }
      else if(belgi == 'x'){
          input.value += '*';
      }
      else if(belgi == '-'){
          input.value += '-';
      }
      else if(belgi == '/'){
          input.value += '/';
      }
      else if(belgi == '='){
        input.value = eval(input.value);
    }
      else{
        input.value += belgi;
      }
      
    })

    
})
// console.log(btn);
// btn.addEventListener('click',function(){
//     input.textContent = btn.value;
//  })
// btn[1].addEventListener('click',function(){
//     input.textContent = 8;
// })
// btn[2].addEventListener('click',function(){
//     input.textContent = 9;
// })
// btn[3].addEventListener('click',function(){
//     input.textContent = '/';
// })
// btn[4].addEventListener('click',function(){
//     input.textContent = 4;
// })
// btn[5].addEventListener('click',function(){
//     input.textContent = 5;
// })
// btn[6].addEventListener('click',function(){
//     input.textContent = 6;
// })
// btn[7].addEventListener('click',function(){
//     input.textContent = 'x';
// })
// btn[8].addEventListener('click',function(){
//     input.textContent = 1;
// })
// btn[9].addEventListener('click',function(){
//     input.textContent = 2;
// })
// btn[10].addEventListener('click',function(){
//     input.textContent = 3;
// })
// btn[11].addEventListener('click',function(){
//     input.textContent = '-';
// })
// btn[12].addEventListener('click',function(){
//     input.textContent = 0;
// })
// btn[13].addEventListener('click',function(){
//     input.textContent = '.';
// })
// btn[14].addEventListener('click',function(){
//     input.textContent = '+';
// })
// iaa
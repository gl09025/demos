function step(){
    var now = new Date()

    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    if(hours > 12){
        hours -= 12
    }
    //添加时间刻度
    // var oul=document.getElementsByTagName('ul')[0];
    // for(var i=0;i<60;i++){
    //     var oli=document.createElement('li');
    //     oli.style.transform='rotate('+i*6+'deg)';
    //     oul.appendChild(oli);
    //     if(i%5==0){
    //     oli.style.height='10px';
    //     oli.style.backgroundColor='blue';
    //     }
    // }
  

    //计算各针的角度
    var hoursDeg = hours * 30 + minutes * 0.5 
    var minutesDeg = minutes * 6 + (seconds * 0.1)
    var secondsDeg = seconds * 6

    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDeg}deg)`
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDeg}deg)`
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDeg}deg)`
    document.getElementById('clock').removeAttribute("hidden")
}
  //添加罗马数字
  var roman = function(){
        var arr = ["Ⅻ","Ⅰ","Ⅱ","Ⅲ","Ⅳ","Ⅴ","Ⅵ","Ⅶ","Ⅷ","Ⅸ","Ⅹ","Ⅺ"]
        var oul=document.getElementsByTagName('ul')[0]
        for(var i=0;i<12;i++){
            var oli=document.createElement('li')
            oli.style.transform='rotate('+i*30+'deg)'
            oul.appendChild(oli)
            oli.innerText = arr[i]
            // oli.style.height='10px'
            oli.style.backgroundColor= 'rgb(255,251,240)'
            oli.style.fontSize = '20px'
            oli.style.listStyleType='none'
        }
  }
    
roman()
setInterval(function(){
    step()
},1000)
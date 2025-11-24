let button = document.getElementById('btn')

button.addEventListener('contextmenu',function(){
    // alert("i am clicked yuppp!")  //click
    // HOW TO CHANGE THE CONENT OF THE ANOTHER ELEMENT
    //document.querySelector('.box'). innerHTML = "lak turu turu tera chute khanda lak niiiiiiiiiiii   lakk turur"    // doubleclick(dblclcick)
 
    alert("bhai right click kyu dbha diya")   // contextmenu(right click)
})

/*
    KEYBOARD EVENTS
*/
document.addEventListener('keydown',function(e){
    console.log(e.key,e.keyCode)
})
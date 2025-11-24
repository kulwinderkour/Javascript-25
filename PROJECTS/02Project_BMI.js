const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// THIS USECASE RETURN EMPTY VALUE SO DONT INSERT HERE

form.addEventListener('submit',function(e){
    e.preventDefault() 
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = (document.querySelector('#result'))

    if(height === " " || height <0 || isNaN(height))
    {
        result.innerHTML = `please give a valid height ${height}`
    }
    else if (weight === " " || weight <0 || isNaN(weight))
    {
        result.innerHTML = `please give a valid weight ${weight}`
    }
    else{
      const BMI = (weight / ((height*height)/10000)).toFixed(2);
      // show the result
    //   result.innerHTML = `<span>${BMI}</span>`
    let category = ''
      if(BMI <18.3){
            category = `Underweight`
      }
      else if(BMI >=18.3 && BMI<24.3){
        category = `Normal range`
      }
      else if(BMI >24.3){
    category = `obestiy`
      }

       result.innerHTML = `
            Your BMI is <strong>${BMI}</strong><br>
            Category: <strong>${category}</strong>
        `;
    }
    
});


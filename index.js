let number ;  

const generate_Number = ()=>{

let number =Math.trunc( Math.random()*10)%6 + 1
    
     console.log(number)


}

const numberGenerate = ()=>{
    
   let section3 = document.getElementById('section-3')
   let section2 = document.getElementById('section-2')
   let section1 = document.getElementById('section-1')

   section3.style.display='block'
   section1.style.display='none'
   section2.style.display='none'

   setTimeout(() => {
    generate_Number();
   section3.style.display='none'
   section1.style.display='none'
   section2.style.display='block'

   }, 5000);
}

const check = ()=>{
    let values = document.getElementById('input').value;
    let section2 = document.getElementById('section-2')
    let successImage = document.getElementById('successImage');
    let loseImage = document.getElementById('loseImage')
    let name = document.getElementById('name').value
    let pray = document.getElementById('pray');
    let returnBtn = document.getElementById('returnBtn')
    let text = document.getElementById('text')
    let text2 = document.getElementById('text2')
    let goBack = document.getElementById('goBack')
   console.log('good')
    if (values == number) {
      
        successImage.style.display="block"
        section2.style.display='none'
        pray.innerHTML = `Congratulations ! ${name}`
        pray.style.color="green"
        returnBtn.style.display='block'
    }
   

    if (values != number){
loseImage.style.display="block"
pray.innerHTML = `Sorry ${name} you are wrong `;
pray.style.color="red"
section2.style.display='none'
returnBtn.style.display='block'
    }

    if(values === '') {
        text.innerHTML="Please fill it first"
        pray.innerHTML = 'To Play Game You Have To Enter Data ';
        goBack.style.display='block'
        loseImage.style.display="none"
    }

   
 
}

const names = ()=>{
    let name = document.getElementById('name').value
    let text = document.getElementById('text')
    let text2 = document.getElementById('text2')
    if (name !== null) {
        text.innerHTML=""
   
    }
    
}

const numbers = ()=>{
    let text2 = document.getElementById('text2')
    let values = document.getElementById('input').value;
    if (name !== null) {
        
        text2.innerHTML=""
    }
    if (isNaN(values)) {
        text2.innerHTML="Please write number only"
    }
}
const returnHome = ()=>{
    location.reload()
}
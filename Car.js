let on = false;
let velocity = 0;
let newvelocity = 0;
let light = false;

function OffCar(){
   return on = false;
}

function onCar(){
    return on = true;
}

function offlight(){
   return light = false
}

function onlight(){
    return light = true
}

function SpeedUp(){ 
    for(let i=0;i < 20; i++){
         velocity +=10 
         if(velocity <=50){
            console.log('Velocidade do carro: ' + velocity)
            console.log('Velocidade Minima atingida!')
         }else if(velocity >=75){
            console.log('Velocidade do carro: ' + velocity)
            console.log('Velocidade Mediana Atingida')
         }else if(velocity >=150){
            console.log('Velocidade do carro: ' + velocity)
            console.log('Próximo da Velocidade Máxima')
         }else if(velocity ==200){
            console.log('Velocidade do carro: ' + velocity)
            console.log('Velocidade Máxima Atingida!')
            
         }           
    }
    newvelocity +=velocity
    return newvelocity
}

function SpeedDown(){
   for(let i = 20; i >0; i--){
       velocity -=10 
       if(velocity <=50){
          console.log('Velocidade do carro: ' + velocity)
          console.log('Desacelerando...Velocidade Minima atingida!')
       }else if(velocity >=75){
          console.log('Velocidade do carro: ' + velocity)
          console.log('Desacelerando... Velocidade Mediana Atingida')
       }else if(velocity >=150){
          console.log('Velocidade do carro: ' + velocity)
          console.log('Desacelerando...Próximo da Velocidade Máxima')
       }else if(velocity ==200){
          console.log('Velocidade do carro: ' + velocity)
          console.log('Desacelerando...Velocidade Máxima Atingida!')
       } 
   }
  
   newvelocity +=velocity
   return newvelocity 
}

console.log('Carro desligado : ' + on)
onCar()
console.log('Carro ligado : ' + on)
console.log('Luzes Ligadas: ' + light)
onlight()
console.log('Luzes Ligadas: ' + light)
console.warn('Acelerando Carro...')
console.log('Velocidade do carro: ' + newvelocity)
SpeedUp()
console.log('Velocidade do carro: ' + newvelocity)
console.warn('Desacelerando Carro...')
SpeedDown()
console.log('Velocidade do carro: ' + velocity)
offlight()
console.log('Luzes Ligadas: ' + light)
OffCar()
console.log('Carro ligado : ' + on)

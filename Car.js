let on = false;
let velocity = 0;
let newvelocity = 0;
let light = false;

function onCar(){
    return on = true;
}

function onlight(){
    return light = true
}

function SpeedUp(){ 
    if(velocity < 100){
        newvelocity = velocity + 10
    }
}

console.log('Carro desligado : ' + on)
onCar()
console.log('Carro ligado : ' + on)
console.log('Luzes Ligadas: ' + light)
onlight()
console.log('Luzes Ligadas: ' + light)
console.log('Velocidade do carro: ' + newvelocity)
SpeedUp()
console.log('Velocidade do carro: ' + newvelocity)
SpeedUp()

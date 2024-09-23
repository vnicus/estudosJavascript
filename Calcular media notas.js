console.log('Vamos calcular a sua meção');

nota_um = parseFloat(prompt('digite a primeira nota: '));
nota_dois = parseFloat(prompt('digite a segunda nota: '));

media = (nota_um + nota_dois) / 2

console.log('Sua media é ' + media);

if(media >= 10){
  console.log('Sua nota é A');
  
} else{
  if(media  >= 7.5 && media < 8.5){
    console.log('Sua nota é B')
    
  } else{
    if(media >= 6 && media < 7.5){
      console.log('Sua nota é C')
      
    } else{
      if(media >= 5 && media < 6){
        console.log('Sua nota é D')
        
      } else{
          console.log('Sua nota é E')
      }
    }
  }
}
}
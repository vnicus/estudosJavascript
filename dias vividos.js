console.log('Dias Vividos');

let nome = prompt('digite o seu nome: ');

let anos = parseFloat (prompt('digite a sua idade:')); //parseFloat transfora 'string' para numero

let diasVividos = anos * 365;

console.log(nome + ' você já viveu ' + diasVividos + ' dias');

if (anos >= 70){
  
  console.log(nome + ' ta velho em pai');
  
} else{
    if(anos >= 45 && anos < 70){
      
      console.log(nome + ' ta consevado');
      
    } else{
        if(anos >= 20 && anos < 45){
          
          console.log(nome + ' ta novo ainda');
          
        } else{
          
          console.log(nome + ' é recem nascido')
          
        } //fecha else do <45
    } //fecha else do < 70
} //fecha else do if do >=70
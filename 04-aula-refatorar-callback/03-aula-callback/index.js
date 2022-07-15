function mensagemGabriel(){
const promiseMensagemGabriel = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log ('bebam agua')
    resolve()    
  },0)
})
  return promiseMensagemGabriel
 
}

function mensagemRafael(){
  console.log('Hidratado! Bora pra cima!')

}

mensagemGabriel().then(mensagemRafael)

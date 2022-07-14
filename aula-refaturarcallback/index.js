function mensagemGabriel(){
  const promiseMensagemGabriel = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('bebam agua!')
      resolve()
  },0)    
  })
return promiseMensagemGabriel
}

function mensagemRafael(){
  console.log('hidratado! bora pra cima')
}


mensagemGabriel().then(mensagemRafael)
//mensagemRafael()
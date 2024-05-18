var corAtual='red';
function trocarCorDeFundo(){
    if (corAtual === 'red') {
        document.body.style.backgroundColor = 'blue';
        corAtual = 'blue';
    } else {
        document.body.style.backgroundColor = 'red';
        corAtual = 'red';  
}
}
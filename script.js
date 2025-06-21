function Calcular() {
    var num = document.getElementById('num').value
    var multi = document.getElementById('multiplicacao')
    var soma = document.getElementById('soma')
    var sub = document.getElementById('subtracao')
    var resu = document.getElementById('resu')

    if (num.length == 0) {
        alert('Digite um número.')
    } else {
        resu.innerHTML = `<h3>Tabuada do ${num}</h3>`
        multi.innerHTML = '<h4 class="titulos">Multiplicação</h4>'
        soma.innerHTML = '<h4 class="titulos">Soma</h4>'
        sub.innerHTML = '<h4 class="titulos">subtração</h4>'

        for(let i = 1; i <= 10; i++){
            multi.innerHTML += `${i} x ${num} = ${i * Number(num)}<br>`
            soma.innerHTML += `${i} + ${num} = ${i + Number(num)}<br>`
            sub.innerHTML += `${i} - ${num} = ${i - Number(num)}<br>`
        }   
    }
    
}
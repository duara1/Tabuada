function Calcular() {
    var num = document.getElementById('num').value
    var multi = document.getElementById('multiplicacao')
    var soma = document.getElementById('soma')
    var sub = document.getElementById('subtracao')
    var resu = document.getElementById('resu')

    resu.innerHTML = `<h3>Tabuada de ${num}</h3>`
    multi.innerHTML = '<h4 class="titulos">Multiplicação</h4>'
    soma.innerHTML = '<h4 class="titulos">Soma</h4>'
    sub.innerHTML = '<h4 class="titulos">subtração</h4>'

    for(let i = 1; i <= 10; i++){
        multi.innerHTML += `${num} x ${i} = ${Number(num) * i}<br>`
        soma.innerHTML += `${num} + ${i} = ${Number(num) + i}<br>`
        sub.innerHTML += `${num} - ${i} = ${Number(num) - i}<br>`
    }
}
const fileInput = document.querySelector('.file-upload input');
const fileText = document.querySelector('.file-upload span');
const telefone = document.getElementById('telefone');
const header = document.querySelector('.header');

fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        fileText.textContent = this.files[0].name;
    } else {
        fileText.textContent = 'ANEXAR CURRÍCULO';
    }
})

telefone.addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, '').slice(0, 11);

    let formatado = '';

    if (valor.length > 0) formatado += '(' + valor.substring(0, 2);
    if (valor.length >= 3) formatado += ') ' + valor.substring(2, 7);
    if (valor.length >= 8) formatado += '-' + valor.substring(7, 11);

    e.target.value = formatado;
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
});

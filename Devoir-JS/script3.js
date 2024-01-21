let div = document.querySelectorAll('.content')
let liste = document.querySelectorAll('.tab')

liste.forEach((element) => {
    element.addEventListener('click',() => {
        liste.forEach((e) => {
            e.classList.remove('tab-active')
        })
        div.forEach((a) => {
            a.classList.remove('active')
        })
        element.classList.add('tab-active')

        if(element.classList.contains('tab-IGN')) {
            document.querySelector('.IGN').classList.add('active')
        }
        if(element.classList.contains('tab-JVCOM')) {
            document.querySelector('.JVCOM').classList.add('active')
        }
        if(element.classList.contains('tab-kotaku')) {
            document.querySelector('.kotaku').classList.add('active')
        }
    })

});

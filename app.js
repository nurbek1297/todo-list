// ... shallow kopy  API lar va malumotlarni xususiyatlari bilan kuchiradi, bu API bilan ishlashda kerak buladi
// deep kopy oddiy kuchirish

// Synchrones ketma-ket malumotlarni bajarish  algoritimday ishlaydi
// Asynchrones oradagi malumotni tashalb keyin gisiga utib ketadi setimeout bulgan hollarda ishlatiladi navbati kelguncha Web API da kutib turadi

// let a = ['Asliddin', 'Bahodir', 'Fayozbek', 'Sardor']

// let result = [...a]
// console.log(a);


// let r = a
// console.log(r);


// const [bir, ikki, ...qolgani] = [1, 2, 3, 4, 5]
// console.log(qolgani);


// function Asynchrones() {
//     console.log('1');
//     console.log('2');
//     console.log('3');

//     setTimeout(() => {
//         console.log('Hello world');
//     })
//     console.log('4');
//     console.log('5');




// }

// Asynchrones()



const box2 = document.querySelector('.box2')
const add = document.querySelector('.add')
const input = document.querySelector('input')
const strong = document.querySelector('strong')


function qushish() {
    if (input.value.trim() === '') {
        return
    }

    let w = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase()

    const li = document.createElement('li')
    li.textContent = w

    const delet = document.createElement('p')
    delet.textContent = 'Delete'
    delet.style.marginLeft = '10px'

    li.appendChild(delet)
    box2.prepend(li)
    
    delet.addEventListener('click', () => {
        qaytar = li
        li.remove()
        strong.style.display = 'flex'
        setTimeout(() => {
            strong.style.display = 'none'
            qaytar = null;
        }, 3000)
    });
    
    input.value = ''
}

add.addEventListener('click', qushish)

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        qushish()
    }
});

let qaytar = null

strong.addEventListener('click', () => {
    if (qaytar) {
        box2.prepend(qaytar)
        qaytar = null
        strong.style.display = 'none'
    }
});

let doc = document;
let butt = doc.querySelectorAll('.btn');

    butt.forEach(button => {
    button.addEventListener('click', function() {
        butt.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('actives');
                btn.classList.remove('btn1');
            }
        });
        this.classList.add('actives');
    });
});

let butt2 = doc.querySelectorAll('.btns');

butt2.forEach(button => {
    button.addEventListener('click', function() {
        butt2.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('btn-white');
                btn.classList.remove('btns_btn');
            }
        });
        this.classList.add('btns_btn');
    });
})
let whiteBtn = doc.querySelector('.btn-white');
let greyBtn = doc.querySelector('.btn-grey');

let img1 = doc.querySelector('.mac_img1');
let img2 = doc.querySelector('.mac_img2');
let p_btn = doc.querySelector('.colors');
whiteBtn.addEventListener('click', function() {
    img1.classList.add('show');
    img1.classList.remove('hide');
    img2.classList.add('hide');
    img2.classList.remove('show');
    p_btn.textContent = 'White'
});
greyBtn.addEventListener('click', function() {
    img2.classList.add('show');
    img2.classList.remove('hide');
    img1.classList.add('hide');
    img1.classList.remove('show');
    p_btn.textContent = 'Space Grey'
});


let big_butt1 =doc.querySelector('.btn1')
let big_butt2 =doc.querySelector('.btn2')
let big_butt3 =doc.querySelector('.btn3')
let big_butt4 =doc.querySelector('.btn4')





// Получаем элемент с ценой
let priceElement = doc.querySelector('.prices');

// Добавляем обработчики событий для каждой кнопки
big_butt1.addEventListener('click', function() {
    let but1 = doc.querySelector('.prices');
    but1.textContent = '$1,999';
});
big_butt2.addEventListener('click', function() {
    let but1 = doc.querySelector('.prices');
    but1.textContent = '$2,199';
});
big_butt3.addEventListener('click', function() {
    let but1 = doc.querySelector('.prices');
    but1.textContent = '$2,599'
});
big_butt4.addEventListener('click', function() {
    let but1 = doc.querySelector('.prices');
    but1.textContent = '$3,199'
});
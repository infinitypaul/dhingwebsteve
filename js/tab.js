
// Declarations
const tabbed = document.querySelector ('.tab');
const tabBtns = tabbed.querySelectorAll("button");
const pointerOne = document.querySelector ('.pointer-1');
const pointerTwo = document.querySelector ('.pointer-2');
const mail = document.querySelector ('.mail-in');
const phone = document.querySelector ('.phone-in');




tabBtns.forEach((btn) => {
    btn.addEventListener ('click', (e) => {
        e.preventDefault();
        if (btn.classList.contains('two')) {
            mail.classList.add('hidden');
            mail.classList.remove('block');
            phone.classList.remove('hidden');
            phone.classList.add('block');
            pointerOne.classList.add("invisible");
            pointerTwo.classList.remove("invisible");
            tabBtns[0].classList.remove("focused-tab");
            tabBtns[1].classList.add("focused-tab");
        } else {
            mail.classList.add("block");
            mail.classList.remove("hidden");
            phone.classList.remove("block");
            phone.classList.add("hidden");
            pointerOne.classList.remove("invisible");
            pointerTwo.classList.add("invisible");
            tabBtns[0].classList.add("focused-tab");
            tabBtns[1].classList.remove("focused-tab");
        }
    });
});
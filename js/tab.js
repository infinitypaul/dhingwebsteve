function forSmallTabs(){
    const tabbed = document.querySelector(".tab");
    const tabBtns = tabbed.querySelectorAll("button");
    const pointerOne = document.querySelector(".pointer-1");
    const pointerTwo = document.querySelector(".pointer-2");
    const mail = document.querySelector(".mail-in");
    const phone = document.querySelector(".phone-in");

    tabBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (btn.classList.contains("two")) {
                mail.classList.add("hidden");
                mail.classList.remove("block");
                phone.classList.remove("hidden");
                phone.classList.add("block");
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
}

function forBigTabs() {
    const linter = document.querySelector(".linter");
    const lintBtns = linter.querySelectorAll("button");


    lintBtns.forEach((btn) => {
        btn.addEventListener('click', (e) =>{
            e.preventDefault();
            const pointer = btn.querySelector('.pointer');
            const lintPointer = linter.querySelectorAll('.pointer');
            const connector = btn.id;
            const tabElements = document.querySelector('.tab-elements');
            const elemental = tabElements.querySelectorAll(".tabber");
    
            
            lintPointer.forEach((pointing) => {
                pointing.classList.add("invisible");
            });
            lintBtns.forEach((btns) => {
                btns.classList.remove("focused-tab");
            });
            elemental.forEach(element => {
                if (element.classList.contains(connector)) {
                    element.classList.remove('hidden')
                    element.classList.add('lg:flex')
                }else{
                    element.classList.add('hidden')
                    element.classList.remove('lg:flex')
                }
                
            });

            pointer.classList.remove("invisible");
            btn.classList.add('focused-tab')
        });
    });
}
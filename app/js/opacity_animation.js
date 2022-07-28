
function animationText() {
    let arrDoubleCells = document.querySelectorAll('.duble-cell');
    let textHaveAccount = document.querySelector('.have-account');
    let buttonUp = document.querySelector('.btn-signup');
    arrDoubleCells = [...arrDoubleCells, textHaveAccount, buttonUp];
    console.log(arrDoubleCells);
    let i = 0;
    let id = setInterval(flow, 1000);
    function animationOpacity(elem) {
        let j = 0;
        let opac = 0;
        let id = setInterval(black, 100);
        function black() {
            if (j == 20) {
                clearInterval(id);
            }else {
                opac = opac + 0.05;
                elem.style.opacity = opac+'';
                j++;
            }
        }
    }
    
    function flow() {
        if (i == arrDoubleCells.length) {
            clearInterval(id);
        }else {
            animationOpacity(arrDoubleCells[i]);
            i++;

        }
    }

}

animationText();
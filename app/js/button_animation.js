function shaking() {
    var buttonUp = document.querySelector('.btn-signup');
    var posPx = 22;
    var posVw = 2.75;
    var controlTime = 0;
    var id = setInterval(frame, 60);
    function frame() {
        if(document.documentElement.clientWidth <= 800) {
            if (controlTime == 10) {
                clearInterval(id);
                posPx = 22;
            } else { 
                if(posPx==22) {
                    posPx=posPx+10;
                    buttonUp.style.right = posPx + 'px';
                    controlTime++;
                }else if(posPx==32) {
                    posPx=posPx-20;
                    buttonUp.style.right = posPx + 'px';
                    controlTime++;
                }else if(posPx==12) {
                    posPx=posPx+20;
                    buttonUp.style.right = posPx + 'px';
                    controlTime++;
                }
            }
        }
        if(document.documentElement.clientWidth > 800) {
            if (controlTime == 10) {
                clearInterval(id);
                posVw = 2.75;
            } else { 
                if(posVw == 2.75) {
                    posVw=posVw+1.25;
                    buttonUp.style.right = posVw + 'vw';
                    controlTime++;
                }else if(posVw==4) {
                    posVw=posVw-2.5;
                    buttonUp.style.right = posVw + 'vw';
                    controlTime++;
                }else if(posVw==1.5) {
                    posVw=posVw+2.5;
                    buttonUp.style.right = posVw + 'vw';
                    controlTime++;
                }
            }
        }

    }
}
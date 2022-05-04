document.addEventListener('DOMContentLoaded',() => {
    // variables
    const $doc = document,
    $targetTtls = $doc.querySelectorAll('.ttlWrap__main');
    
    // animation trigger
    // ※要素が見えると繰り返しされる＝治すMUST
    window.addEventListener('scroll',() => {
        for (let i = 0; i < $targetTtls.length; i++) {
            const getElDistance = $targetTtls[i].getBoundingClientRect().top + $targetTtls[i].clientHeight * .5;
            if (innerHeight > getElDistance) {
                    ttlAnimation();
            }
        }
    });

    // ttl animation
    const ttlAnimation = () => {
        for (let i = 0; i < $targetTtls.length; i++) {
            const ttlEls = $targetTtls[i],
                  ttlTxts = ttlEls.textContent,
                  txtsArry = [];

            ttlEls.textContent = '';

            for (let j = 0; j < ttlTxts.split('').length; j++) {
                const txtSplit = ttlTxts.split('');
                if (txtSplit[j] === '') {
                    txtsArry.push(' ');
                } else {
                    txtsArry.push('<span><span style="animation-delay: ' + (j*.2) +'s;">' + txtSplit[j] + '</span></span>')
                }
            }
            
            for (let k = 0; k < txtsArry.length; k++) {
                ttlEls.innerHTML =
                ttlEls.innerHTML + txtsArry[k];
            }
        }
    }

});
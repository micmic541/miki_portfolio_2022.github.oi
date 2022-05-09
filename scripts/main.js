document.addEventListener('DOMContentLoaded',() => {
    // variables
    const $doc = document,
    $targetTtls = $doc.querySelectorAll('.ttlWrap__main');
    console.log($targetTtls);
    
    // ttl animation
    const ttlAnimation = () => {
        for (let i = 0; i < $targetTtls.length; i++) {
            const ttlEls = $targetTtls[i],
                  ttlTxts = ttlEls.textContent.trim(),
                  txtsArry = [];

            ttlEls.textContent = '';

            for (let j = 0; j < ttlTxts.split('').length; j++) {
                const txtSplit = ttlTxts.split('');
                if (txtSplit[j] === ' ') {
                    txtsArry.push('  ');
                } else {
                    txtsArry.push('<span style="animation-delay: ' + (j*.2) +'s;">' + txtSplit[j] + '</span>')
                }
            }
            
            for (let k = 0; k < txtsArry.length; k++) {
                ttlEls.innerHTML =
                ttlEls.innerHTML + txtsArry[k];
            }
        }
    }

    // ttl animation trigger
    const ttlShowTiming = () => {
        for (let i = 0; i < $targetTtls.length; i++) {
            const getElDistance = $targetTtls[i].getBoundingClientRect().top + $targetTtls[i].clientHeight * .5;
            if (innerHeight > getElDistance) {
                ttlAnimation();
            } 
        }
    };
    
    window.addEventListener('scroll', ttlShowTiming());

});
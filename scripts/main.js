document.addEventListener('DOMContentLoaded',() => {
    // variables
    const $doc = document,
     $targetTtls = $doc.querySelectorAll('.ttlWrap__main');
    
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

    // animation trigger for title
    const trigger = () => {
        for (let i = 0; i < $targetTtls.length; i++) {
            const rect = $targetTtls[i].getBoundingClientRect().top;
            const scroll = window.pageXOffset || document.documentElement.scrollTop;
            const offset = rect + scroll;
            const windowHeight = window.innerHeight;
            if (scroll > offset - windowHeight + 150) {
                ttlAnimation();
            }
        }
    }

    window.addEventListener('scroll',trigger,{once:true});
    
    

});
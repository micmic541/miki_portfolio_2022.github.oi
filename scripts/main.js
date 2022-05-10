document.addEventListener('DOMContentLoaded',() => {
    // --variables--
    const $doc = document,
     $targetTtls = $doc.querySelectorAll('.ttlWrap__main'),
     $slideIn = $doc.querySelectorAll('.js-scroll-trigger');
    
    // --ttl animation--
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
                ttlEls.innerHTML += txtsArry[k];
            }
        }
    }

    // animation trigger for title
    const triggerTtl = (els) => {
        for (let i = 0; i < els.length; i++) {
            const rect = els[i].getBoundingClientRect().top;
            const scroll = window.pageYOffset;
            const offset = rect + scroll;
            const windowHeight = window.innerHeight;
            if (scroll > offset - windowHeight + 200) {
                ttlAnimation();
            }
        }
    }

    window.addEventListener('scroll',triggerTtl($targetTtls),{once:true});


    // --animation for slide-in contents--
    const scrollIn = (trigger) => {
    window.addEventListener('scroll', ()=> {
        for (let i = 0; i < trigger.length; i++) {
            let position = trigger[i].getBoundingClientRect().top,
                scroll = window.pageYOffset || document.documentElement.scrollTop,
                offset = position + scroll,
                windowHeight = window.innerHeight;
                
                if (scroll > offset - windowHeight) {
                    trigger[i].classList.add('is-active');
                }
            }
        })
    };
        
    if ($slideIn.length) {
        scrollIn($slideIn);
    }
    

});
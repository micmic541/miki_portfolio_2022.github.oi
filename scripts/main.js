document.addEventListener('DOMContentLoaded',() => {
    // --variables--
    const $doc = document,
    $targetTtls = $doc.querySelectorAll('.ttlWrap__main'),
    $slideInFirst = $doc.querySelector('#js-scroll-trigger_first'),
    $slideIn = $doc.querySelectorAll('.js-scroll-trigger');
    
    
    // --ttl animation--
    const options = {
        threshold: 0
    };

    const observer = new IntersectionObserver(ttlAnimation,options);

    $targetTtls.forEach(ttl => {
        observer.observe(ttl);
    });

    function ttlAnimation(els){
        els.forEach(el => {
            if (el.isIntersecting) {
                ttlTrigger(el.target);
            }
        });
    }

    function ttlTrigger(txt) {
        let ttlEls = txt,
            ttlTxts = ttlEls.textContent,
            txtsArry = [];
        
        ttlEls.textContent = '';
    
        for (let j = 0; j < ttlTxts.split('').length; j++) {
            const txtSplit = ttlTxts.split('');
            if (txtSplit[j] === ' ') {
                txtsArry.push('  ');
            } else {
                txtsArry.push('<span style="animation-delay: ' + (j*.15) +'s;">' + txtSplit[j] + '</span>')
            }
        }
        
        for (let k = 0; k < txtsArry.length; k++) {
            ttlEls.innerHTML += txtsArry[k];
        }
    }
     
    // --animation for first contents--
    const animationFirst = () => {
        return $slideInFirst.classList.add('is-active');
    }
    setTimeout(animationFirst,500);

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
document.addEventListener('DOMContentLoaded',() => {
    // --variables--
    const $doc = document,
     $targetTtls = $doc.querySelectorAll('.ttlWrap__main'),
     $slideInFirst = $doc.querySelector('#js-scroll-trigger_first'),
     $slideIn = $doc.querySelectorAll('.js-scroll-trigger');
    
     // --ttl animation--
     const ttlAnimation = (els) => {
         for (let i = 0; i < els.length; i++) {
             const ttlEls = els[i],
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
                 return ttlAnimation(els);
             }
         }
     }
 

    $doc.addEventListener('scroll',triggerTtl($targetTtls));

     
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


    // ---CODE THAT DIDNT WORK---animation trigger for title
    //  const triggerTtl = (els) => {
    //      for (let i = 0; i < els.length; i++) {
    //          const rect = els[i].getBoundingClientRect().top;
    //          const scroll = window.pageYOffset;
    //          const offset = rect + scroll;
    //          const windowHeight = window.innerHeight;
    //          let $targetTtls = [];
    //         if (scroll > offset - windowHeight + 200) {
    //             $targetTtls = $doc.querySelectorAll('.js-ttl_01');
    //             return ttlAnimation($targetTtls);
    //         }
    //         if (scroll > offset - windowHeight + 600) {
    //             $targetTtls = $doc.querySelectorAll('.js-ttl_02');
    //             return ttlAnimation($targetTtls);
    //         }
    //     }
    // }

    // // --ttl animation--
    // const ttlAnimation = (els) => {
    //     for (let i = 0; i < els.length; i++) {
    //         const ttlEls = els,
    //                 ttlTxts = ttlEls.textContent.trim(),
    //                 txtsArry = [];

    //         ttlEls.textContent = '';

    //         for (let j = 0; j < ttlTxts.split('').length; j++) {
    //             const txtSplit = ttlTxts.split('');
    //             if (txtSplit[j] === ' ') {
    //                 txtsArry.push('  ');
    //             } else {
    //                 txtsArry.push('<span style="animation-delay: ' + (j*.2) +'s;">' + txtSplit[j] + '</span>')
    //             }
    //         }
    //     }
    // }
    
    // window.addEventListener('scroll',triggerTtl($targetTtl));
    

});
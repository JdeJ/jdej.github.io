function typeIt(dom, message) {
    Array.from(message).forEach((let, i) => {    
        setTimeout(()=>{
            dom.textContent = dom.textContent + let;
        }, i*100);  
    });
}

typeIt(document.querySelector('.subtitle'), 'Developer under construction');
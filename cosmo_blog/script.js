window.onload = function(){
    if(typeof AOS !== 'undefined'){
        AOS.init({
            duration:1000,
            once:true
        })
    }
    const btn = document.querySelector('.cta-button');
    if(btn){
        btn.addEventListener('click', () =>{
            window.scrollTo({
                top:window.innerHeight,
                behavior: 'smooth'
            })
        }
        )
    }
}
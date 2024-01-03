/* Header Toggle START */
let MenuBtn=document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('toggle-header')
    MenuBtn.classList.toggle('fa-xmark')
})
console.log('Hello World')
/* Header Toggle END */
/*typing animation START*/
let type=new Typed('.TypingAnimation',{
   strings: ['Web Developer', 'UI/UX Designer'],
      typeSpeed: 200,
      backSpeed:50,
      backDelay:2000,
      loop:true,
    });
/*typing animation END*/
/*Active link state on scroll START*/
let navLinks=document.querySelectorAll('header nav ul li a')
let Section=document.querySelectorAll('section')
window.addEventListener('scroll', ()=>{
    const scrollPos=window.scrollY + 10
    Section.forEach(section =>{
        if(scrollPos>section.offsetTop && scrollPos <(section.offsetTop +section.offsetHeight)){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                    link.classList.add("active");
                }
            });
        }
    });
});


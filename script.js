var tl = gsap.timeline();

tl.from("#nav img , #nav h3 , #nav h4 , #nav button" , {
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2   // jo elements ek saath animate ho rhe the vo ek saath na ho 0.5 k baad ho ek k baad ek
})


tl.from("#main h1" ,{
    y:100,
    opacity:0,
    stagger:0.3
})

tl.from("#main>img" ,{
    scale:0,
    opacity:0,
    stagger:0.3
})

tl.from("h5" , {
    scale:0,
    opacity:0
})

tl.from("h5" ,{
    y:40,
    yoyo:true,
    repeat:-1

})




























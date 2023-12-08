const tl = gsap.timeline()

// gsap.from("#page1 #box" , {
//      scale:0,
//      duration:1,
//      delay:1,
//      rotate:360
// })


// gsap.from("#page2 #box" , {
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:360,
//     scrollTrigger:"#page2 #box"
// })

// gsap.from("#page3 #box" , {
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:360,
//     scrollTrigger:"#page3 #box"
// })


gsap.from("#page1 #box" , {
          scale:0,
          duration:1,
          delay:1,
          rotate:360,
          scrollTrigger:{
        
               trigger:"#page1 #box",
               scroller:"body",
               markers:true,
               start:"top 50%",
               end:"top 30%",
               scrub:true
              
         }
     })
     
     
     gsap.from("#page2 #box" , {
         scale:0,
         duration:1,
         delay:1,
         rotate:360,
         scrollTrigger: {
          trigger:"#page2 #box",
          scroller:"body",
          markers:true,
          start:"top 50%",
          end:"top 30%",
          scrub:true
         }
     })
     
     gsap.from("#page3 #box" , {
         scale:0,
         duration:1,
         delay:1,
         rotate:360,
         scrollTrigger:{
        
               trigger:"#page3 #box",
               scroller:"body",
               markers:true,
               start:"top 50%",
               end:"top 30%",
               scrub:true
              
         }
     })
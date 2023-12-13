let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
current = 0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
    }
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
    current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
    current = -1;
}
slideRight();
});

startSlide();

//
//
//

let ImageSLIDER1 = document.querySelectorAll(".SLIDE1"),
AL1 = document.querySelector("#LA"),
RL1 = document.querySelector("#RA"),
COUNT1 = 0;

// Clear all images
function RESET1() {
for (let i = 0; i < ImageSLIDER1.length; i++) {
    ImageSLIDER1[i].style.display = "none";
    }
}

// Initial slide
function SLIDESTRAT1() {
    RESET1();
    ImageSLIDER1[0].style.display = "block";
}

// Show previous
function LeftSlide() {
    RESET1();
    ImageSLIDER1[COUNT1 - 1].style.display = "block";
    COUNT1--;
}

// Show next
function RightSlide() {
    RESET1();
    ImageSLIDER1[COUNT1 + 1].style.display = "block";
    COUNT1++;
}

// Left arrow click
AL1.addEventListener("click", function () {
if (COUNT1 === 0) {
    COUNT1 = ImageSLIDER1.length;
}
LeftSlide();
});

// Right arrow click
RL1.addEventListener("click", function () {
if (COUNT1 === ImageSLIDER1.length - 1) {
    COUNT1 = -1;
}
RightSlide();
});

SLIDESTRAT1();

//
//
//
//
let ImageSLIDER11 = document.querySelectorAll(".SLIDE11"),
    AL11 = document.querySelector("#LA11"),
    RL11 = document.querySelector("#RA11"),
    COUNT11 = 0;
    
    // Clear all images
    function RESET11() {
    for (let i = 0; i < ImageSLIDER11.length; i++) {
    	ImageSLIDER11[i].style.display = "none";
        }
    }
    
    // Initial slide
    function SLIDESTRAT11() {
        RESET11();
        ImageSLIDER11[0].style.display = "block";
    }
    
    // Show previous
    function LeftSlide11() {
        RESET11();
        ImageSLIDER11[COUNT11 - 1].style.display = "block";
        COUNT11--;
    }
    
    // Show next
    function RightSlide11() {
        RESET11();
        ImageSLIDER11[COUNT11 + 1].style.display = "block";
        COUNT11++;
    }
    
    // Left arrow click
    AL11.addEventListener("click", function () {
    if (COUNT11 === 0) {
    	COUNT11 = ImageSLIDER11.length;
    }
    LeftSlide11();
    });
    
    // Right arrow click
    RL11.addEventListener("click", function () {
    if (COUNT11 === ImageSLIDER11.length - 1) {
    	COUNT11 = -1;
    }
    RightSlide11();
    });
    
    SLIDESTRAT11();

    //
    //
    //
    let ImageSLIDER33 = document.querySelectorAll(".SLIDE33"),
    AL33 = document.querySelector("#LA33"),
    RL33 = document.querySelector("#RA33"),
    COUNT33 = 0;
    
    // Clear all images
    function RESET33() {
    for (let i = 0; i < ImageSLIDER33.length; i++) {
    	ImageSLIDER33[i].style.display = "none";
        }
    }
    
    // Initial slide
    function SLIDESTRAT33() {
        RESET33();
        ImageSLIDER33[0].style.display = "block";
    }
    
    // Show previous
    function LeftSlide33() {
        RESET33();
        ImageSLIDER33[COUNT33 - 1].style.display = "block";
        COUNT33--;
    }
    
    // Show next
    function RightSlide33() {
        RESET33();
        ImageSLIDER33[COUNT33 + 1].style.display = "block";
        COUNT33++;
    }
    
    // Left arrow click
    AL33.addEventListener("click", function () {
    if (COUNT33 === 0) {
    	COUNT33 = ImageSLIDER33.length;
    }
    LeftSlide33();
    });
    
    // Right arrow click
    RL33.addEventListener("click", function () {
    if (COUNT33 === ImageSLIDER33.length - 1) {
    	COUNT33 = -1;
    }
    RightSlide33();
    });
    
    SLIDESTRAT33();

    //
    //
    //
    let ImageSLIDER5 = document.querySelectorAll(".SLIDE5"),
    AL5 = document.querySelector("#LA5"),
    RL5 = document.querySelector("#RA5"),
    COUNT5 = 0;
    
    // Clear all images
    function RESET5() {
    for (let i = 0; i < ImageSLIDER5.length; i++) {
    	ImageSLIDER5[i].style.display = "none";
        }
    }
    
    // Initial slide
    function SLIDESTRAT5() {
        RESET5();
        ImageSLIDER5[0].style.display = "block";
    }
    
    // Show previous
    function LeftSlide5() {
        RESET5();
        ImageSLIDER5[COUNT5 - 1].style.display = "block";
        COUNT5--;
    }
    
    // Show next
    function RightSlide5() {
        RESET5();
        ImageSLIDER5[COUNT5 + 1].style.display = "block";
        COUNT5++;
    }
    
    // Left arrow click
    AL5.addEventListener("click", function () {
    if (COUNT5 === 0) {
    	COUNT5 = ImageSLIDER5.length;
    }
    LeftSlide5();
    });
    
    // Right arrow click
    RL5.addEventListener("click", function () {
    if (COUNT5 === ImageSLIDER5.length - 1) {
    	COUNT5 = -1;
    }
    RightSlide5();
    });
    
    SLIDESTRAT5();

    //
    //

    let ImageSLIDER7 = document.querySelectorAll(".SLIDE7"),
    AL7 = document.querySelector("#LA7"),
    RL7 = document.querySelector("#RA7"),
    COUNT7 = 0;
    
    // Clear all images
    function RESET7() {
    for (let i = 0; i < ImageSLIDER7.length; i++) {
    	ImageSLIDER7[i].style.display = "none";
        }
    }
    
    // Initial slide
    function SLIDESTRAT7() {
        RESET7();
        ImageSLIDER7[0].style.display = "block";
    }
    
    // Show previous
    function LeftSlide7() {
        RESET7();
        ImageSLIDER7[COUNT7 - 1].style.display = "block";
        COUNT7--;
    }
    
    // Show next
    function RightSlide7() {
        RESET7();
        ImageSLIDER7[COUNT7 + 1].style.display = "block";
        COUNT7++;
    }
    
    // Left arrow click
    AL7.addEventListener("click", function () {
    if (COUNT7 === 0) {
    	COUNT7 = ImageSLIDER7.length;
    }
    LeftSlide7();
    });
    
    // Right arrow click
    RL7.addEventListener("click", function () {
    if (COUNT7 === ImageSLIDER7.length - 1) {
    	COUNT7 = -1;
    }
    RightSlide7();
    });
    
    SLIDESTRAT7();

    
    //
    //

    let ImageSLIDER8 = document.querySelectorAll(".SLIDE8"),
    AL8 = document.querySelector("#LA8"),
    RL8 = document.querySelector("#RA8"),
    COUNT8 = 0;
    
    // Clear all images
    function RESET8() {
    for (let i = 0; i < ImageSLIDER8.length; i++) {
    	ImageSLIDER8[i].style.display = "none";
        }
    }
    
    // Initial slide
    function SLIDESTRAT8() {
        RESET8();
        ImageSLIDER8[0].style.display = "block";
    }
    
    // Show previous
    function LeftSlide8() {
        RESET8();
        ImageSLIDER8[COUNT8 - 1].style.display = "block";
        COUNT8--;
    }
    
    // Show next
    function RightSlide8() {
        RESET8();
        ImageSLIDER8[COUNT8 + 1].style.display = "block";
        COUNT8++;
    }
    
    // Left arrow click
    AL8.addEventListener("click", function () {
    if (COUNT8 === 0) {
    	COUNT8 = ImageSLIDER8.length;
    }
    LeftSlide8();
    });
    
    // Right arrow click
    RL8.addEventListener("click", function () {
    if (COUNT8 === ImageSLIDER8.length - 1) {
    	COUNT8 = -1;
    }
    RightSlide8();
    });
    
    SLIDESTRAT8();

      //

      let ImageSLIDER9 = document.querySelectorAll(".SLIDE9"),
      AL9 = document.querySelector("#LA9"),
      RL9 = document.querySelector("#RA9"),
      COUNT9 = 0;
      
      // Clear all images
      function RESET9() {
      for (let i = 0; i < ImageSLIDER9.length; i++) {
          ImageSLIDER9[i].style.display = "none";
          }
      }
      
      // Initial slide
      function SLIDESTRAT9() {
          RESET9();
          ImageSLIDER9[0].style.display = "block";
      }
      
      // Show previous
      function LeftSlide9() {
          RESET9();
          ImageSLIDER9[COUNT9 - 1].style.display = "block";
          COUNT9--;
      }
      
      // Show next
      function RightSlide9() {
          RESET9();
          ImageSLIDER9[COUNT9 + 1].style.display = "block";
          COUNT9++;
      }
      
      // Left arrow click
      AL9.addEventListener("click", function () {
      if (COUNT9 === 0) {
          COUNT9 = ImageSLIDER9.length;
      }
      LeftSlide9();
      });
      
      // Right arrow click
      RL9.addEventListener("click", function () {
      if (COUNT9 === ImageSLIDER9.length - 1) {
          COUNT9 = -1;
      }
      RightSlide9();
      });
      
      SLIDESTRAT9();
           //
//
//
//
           let ImageSLIDER70 = document.querySelectorAll(".SLIDE70"),
           AL70 = document.querySelector("#LA70"),
           RL70 = document.querySelector("#RA70"),
           COUNT70 = 0;
           
           // Clear all images
           function RESET70() {
           for (let i = 0; i < ImageSLIDER70.length; i++) {
               ImageSLIDER70[i].style.display = "none";
               }
           }
           
           // Initial slide
           function SLIDESTRAT70() {
               RESET70();
               ImageSLIDER70[0].style.display = "block";
           }
           
           // Show previous
           function LeftSlide70() {
               RESET70();
               ImageSLIDER70[COUNT70 - 1].style.display = "block";
               COUNT70--;
           }
           
           // Show next
           function RightSlide70() {
               RESET70();
               ImageSLIDER70[COUNT70 + 1].style.display = "block";
               COUNT70++;
           }
           
           // Left arrow click
           AL70.addEventListener("click", function () {
           if (COUNT70 === 0) {
               COUNT70 = ImageSLIDER70.length;
           }
           LeftSlide70();
           });
           
           // Right arrow click
           RL70.addEventListener("click", function () {
           if (COUNT70 === ImageSLIDER70.length - 1) {
               COUNT70 = -1;
           }
           RightSlide70();
           });
           
           SLIDESTRAT70();

           //
//
//
let ImageSLIDER80 = document.querySelectorAll(".SLIDE80"),
AL80 = document.querySelector("#LA80"),
RL80 = document.querySelector("#RA80"),
COUNT80 = 0;

// Clear all images
function RESET80() {
for (let i = 0; i < ImageSLIDER80.length; i++) {
    ImageSLIDER80[i].style.display = "none";
    }
}

// Initial slide
function SLIDESTRAT80() {
    RESET80();
    ImageSLIDER80[0].style.display = "block";
}

// Show previous
function LeftSlide80() {
    RESET80();
    ImageSLIDER80[COUNT80 - 1].style.display = "block";
    COUNT80--;
}

// Show next
function RightSlide80() {
    RESET80();
    ImageSLIDER80[COUNT80 + 1].style.display = "block";
    COUNT80++;
}

// Left arrow click
AL80.addEventListener("click", function () {
if (COUNT80 === 0) {
    COUNT80 = ImageSLIDER80.length;
}
LeftSlide80();
});

// Right arrow click
RL80.addEventListener("click", function () {
if (COUNT80 === ImageSLIDER80.length - 1) {
    COUNT80 = -1;
}
RightSlide80();
});

SLIDESTRAT80();

//
//
//

let ImageSLIDER90 = document.querySelectorAll(".SLIDE90"),
AL90 = document.querySelector("#LA90"),
RL90 = document.querySelector("#RA90"),
COUNT90 = 0;

// Clear all images
function RESET90() {
for (let i = 0; i < ImageSLIDER90.length; i++) {
    ImageSLIDER90[i].style.display = "none";
    }
}

// Initial slide
function SLIDESTRAT90() {
    RESET90();
    ImageSLIDER90[0].style.display = "block";
}

// Show previous
function LeftSlide90() {
    RESET90();
    ImageSLIDER90[COUNT90 - 1].style.display = "block";
    COUNT90--;
}

// Show next
function RightSlide90() {
    RESET90();
    ImageSLIDER90[COUNT90 + 1].style.display = "block";
    COUNT90++;
}

// Left arrow click
AL90.addEventListener("click", function () {
if (COUNT90 === 0) {
    COUNT90 = ImageSLIDER90.length;
}
LeftSlide90();
});

// Right arrow click
RL90.addEventListener("click", function () {
if (COUNT90 === ImageSLIDER90.length - 1) {
    COUNT90 = -1;
}
RightSlide90();
});

SLIDESTRAT90();


//
//
//







// console.log("Js file linked successfully !")

// select html elements

let qtes = Array.from(document.querySelectorAll(".qte"));

let plusBtns = Array.from(document.querySelectorAll(".fa-circle-plus"));

let minusBtns = Array.from(document.querySelectorAll(".fa-circle-minus"));

let likes = Array.from(document.querySelectorAll(".fa-heart"));

let cards = Array.from(document.querySelectorAll(".card"));

let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-can"));



// add event listener to plusBtns

    for (let plusBtn of plusBtns) {
      plusBtn.addEventListener("click", function () {
        plusBtn.previousElementSibling.innerHTML++;
        total();
      });
    } 


    // add event listener to minusBtns

    for (let minusBtn of minusBtns) {
      minusBtn.addEventListener("click", function () {
        if (minusBtn.nextElementSibling.innerHTML > 0) {
          minusBtn.nextElementSibling.innerHTML--;
          total();
        }
      });
    } 


    // like btns
    for (let like of likes) {
        like.addEventListener("click", function() {
            if (like.style.color !== "red") {
                like.style.color = "red";
                like.style.transition = "0.3s";
                like.style.fontSize = "2rem";
                like.classList.add("bounce");
                setTimeout(function () {
                  like.classList.remove("bounce");
                }, 500);
            } else{
                like.style.color = "rgb(33, 37, 41)";
                like.style.fontSize = "1.5rem";
            }
        })
    }


    
    
        // delete btns
     for (let i in deleteBtns) {
        deleteBtns[i].addEventListener("click", function(){
            cards[i].remove();
           total()
        });
     }
  




    // Function Total Price
    function total() {
        let qte = Array.from(document.querySelectorAll(".qte"));
        let price = Array.from(document.querySelectorAll(".unit-price"))
        let s = 0;
        //console.log(qte)
        //console.log(price)
        for ( let i = 0; i < price.length; i++ ) {
            s = s + price[i].innerHTML * qte[i].innerHTML;
            
        }
        document.getElementById("total-price").innerHTML = s; 
    }
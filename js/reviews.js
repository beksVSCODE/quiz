const input = document.querySelector('.input_for_reviews')

const btnSend = document.querySelector('.button_send')

const reviews = document.querySelector('.block')

let arrayComment = []

btnSend.addEventListener("click", function () { 
  safe()
    arrayComment.push({ 
        text: sanitizeInput(input.value), 
      }); 
      
      
      

      displayHtml()

      

      input.value = ""; 
  
    }); 
   let safe = function(){
    if(input.value==''){
      
    }
   }


    const displayHtml = () => { 

      reviews.innerHTML = "" 
      arrayComment.forEach((item, index) => { 
        reviews.innerHTML += `
        <div class="reviews_block "">
              <div class="profile">
                <img  src="../media/reviews/profile.svg" alt="">
                <h1>Anonym</h1>
              </div>
              <p class="for_text">${item.text}</p>
        </div>
               
                   `;
      
      }); 
    } 
  

    
  //делает код безопасным, функция очищает контент от тэгов используя
  // метод textContent и возвращает в метод innerHTML
  const sanitizeInput = (inputValue) => {
    const div = document.createElement('div')
    div.textContent = inputValue;
    return div.innerHTML
  }

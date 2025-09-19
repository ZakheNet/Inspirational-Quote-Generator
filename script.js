


 
 
let response={author:"",quote:""}
 
 async function makeQuote(){
     fetch('https://dummyjson.com/quotes/random').then(res=>res.json())
     .then(res=>response=res)
     .then(res=>document.getElementById("author").innerText=response.author)
     .then(res=>document.getElementById("text").innerText=response.quote)
     .then(res=>document.getElementById("tweet-quote").setAttribute("href","https://twitter.com/intent/tweet?text="+response.quote+" By "+response.author))
  }

 

  makeQuote()
  





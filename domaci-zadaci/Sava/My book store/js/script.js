var  books = [
    {
      isbn: "9781593275846",
      title: "Eloquent JavaScript, Second Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2014-12-14T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 472,
      description: "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      website: "http://eloquentjavascript.net/",
      cover: "http://eloquentjavascript.net/img/cover.jpg"
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      author: "Addy Osmani",
      published: "2012-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      website: "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
      cover: "https://pictures.abebooks.com/isbn/9781449331818-us.jpg"
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      subtitle: "An In-Depth Guide for Programmers",
      author: "Axel Rauschmayer",
      published: "2014-02-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 460,
      description: "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
      website: "http://speakingjs.com/",
      cover: "https://pictures.abebooks.com/isbn/9781449365035-us.jpg"
    },
    {
      isbn: "9781491950296",
      title: "Programming JavaScript Applications",
      subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
      author: "Eric Elliott",
      published: "2014-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      description: "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
      website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html",
      cover: "https://images-na.ssl-images-amazon.com/images/I/512Hli3f6FL._SX379_BO1,204,203,200_.jpg"
    },
    {
      isbn: "9781593277574",
      title: "Understanding ECMAScript 6",
      subtitle: "The Definitive Guide for JavaScript Developers",
      author: "Nicholas C. Zakas",
      published: "2016-09-03T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 352,
      description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
      website: "https://leanpub.com/understandinges6/read",
      cover: "https://images-na.ssl-images-amazon.com/images/I/512T%2Bd%2BVK6L._SX376_BO1,204,203,200_.jpg"
    },
    {
      isbn: "9781491904244",
      title: "You Don't Know JS",
      subtitle: "ES6 & Beyond",
      author: "Kyle Simpson",
      published: "2015-12-27T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 278,
      description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the 'You Don’t Know JS' series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
      website: "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond",
      cover: "https://images-na.ssl-images-amazon.com/images/I/41arrvfm3fL._SX329_BO1,204,203,200_.jpg"
    },
    {
      isbn: "9781449325862",
      title: "Git Pocket Guide",
      subtitle: "A Working Introduction",
      author: "Richard E. Silverman",
      published: "2013-08-02T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 234,
      description: "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
      website: "http://chimera.labs.oreilly.com/books/1230000000561/index.html",
      cover: "https://pictures.abebooks.com/isbn/9781449325862-us.jpg"
    },
    {
      isbn: "9781449337711",
      title: "Designing Evolvable Web APIs with ASP.NET",
      subtitle: "Harnessing the Power of the Web",
      author: "Glenn Block, et al.",
      published: "2014-04-07T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 538,
      description: "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
      website: "http://chimera.labs.oreilly.com/books/1234000001708/index.html",
      cover: "https://i.ebayimg.com/images/g/LBwAAOSwXCVcb1rk/s-l500.jpg"
    }
  ];

var cikaRadeEmail1 = 'r_ostojic@hotmail.com';
var cikaRadeEmail2 = 'rostojic@gmail.com';

console.log(cikaRadeEmail1);
console.log(cikaRadeEmail2);

/////////////////// funkcije za kreiranje novih elemenata  ///////////////////////



//// kreiranje funkcije i pravljenje(sacuvavanje) niza sa starim podacima ///


function createNewArray(book){

    var oldShelves = [];

     for(var i= 0; i < book.length; i++){

         oldShelves.push(book[i]);
    } 

    console.log(oldShelves);

return oldShelves;

}


var oldShelves = 
createNewArray(books);
console.log(oldShelves);


///////////////////////////////////





////////////  funkcije za kreiranje elemenata ///////////


function createImg(cover, item){

 var imgBook = document.createElement('img');
 var imgAtr = document.createAttribute('src');
 imgAtr.value = cover;
 imgBook.setAttributeNode(imgAtr);

 
 var imgAtr2 = document.createAttribute('class');
 imgAtr2.value = 'all';
 imgBook.setAttributeNode(imgAtr2);

 item.appendChild(imgBook)
 item.appendChild(imgBook);
}

function createDivForTitle(title, item){

 var divTitle = document.createElement('div');
 var titleAtr = document.createAttribute('class');
 titleAtr.value = 'all';
 divTitle.setAttributeNode(titleAtr);

 divTitle.textContent = title;
 item.appendChild(divTitle);

}

function createDivForAuthor(author,item){

 var divAuthor = document.createElement('div');
 var autorAtr = document.createAttribute('class');
 autorAtr.value = 'all';

 divAuthor.setAttributeNode(autorAtr);


 divAuthor.textContent = author;
 item.appendChild(divAuthor);
}

function createDivForNUmberOfPage(pages,item){

var divPage = document.createElement('div');
var pageArt = document.createAttribute('class');
pageArt.value = 'all';
divPage.setAttributeNode(pageArt);

divPage.textContent = pages;
item.appendChild(divPage);


}

//////////////////////////////////////////////////////




///////////////////// zavrsna funkcija ///////////////////////////////

function complateShelves(book){



     var cover = [];
     var author = [];
     var pages = [];
     var title = [];


for(var i = 0; i < books.length; i++){

       cover.push(book[i].cover);
       author.push(book[i].author);
       pages.push(book[i].pages);
       title.push(book[i].title);
 }

      createShelves()
 
              function createShelves(){

                   var item = document.querySelectorAll('.item');
                   console.log(item);

                    for(i = 0; i < item.length; i++){

                     createImg(cover[i], item[i]);
                     createDivForTitle(title[i],item[i])
                     createDivForAuthor(author[i], item[i]);
                     createDivForNUmberOfPage(pages[i], item[i]);
  }

}

}


complateShelves(books)


//////////////////////////////////////////////////////////////////////




///////////////// funkcija za brisanje elemenata  /////////////////////


function elementRemove(){


var removeElement = document.querySelectorAll('.all');
 
console.log(removeElement);


for(var i = 0; i < removeElement.length; i++){
   
  removeElement[i].remove(removeElement);
 
}


}



/////////////////// funkcija za ponovno kreiranje elemenata //////////////


function createNewElement(){




    function createImg(cover, item){

  var imgBook = document.createElement('img');
  var imgAtr = document.createAttribute('src');
  imgAtr.value = cover;
  imgBook.setAttributeNode(imgAtr);

  var imgArt1 = document.createAttribute('class');
  imgArt1.value = 'all';
  imgBook.setAttributeNode(imgArt1);

  item.appendChild(imgBook)
  item.appendChild(imgBook);

    }

    function createDivForTitle(title, item){

  var divTitle = document.createElement('div');
  var titleAtr = document.createAttribute('class');
  titleAtr.value = 'all';
  divTitle.setAttributeNode(titleAtr);

  divTitle.textContent = title;
  item.appendChild(divTitle);

    }

    function createDivForAuthor(author, item){

  var divAuthor = document.createElement('div');
  var autorAtr = document.createAttribute('class');
  autorAtr.value = 'all';

  divAuthor.setAttributeNode(autorAtr);
 

  divAuthor.textContent = author;
  item.appendChild(divAuthor);
    }

    function createDivForNUmberOfPage(pages, item){

 var divPage = document.createElement('div');
 var pageArt = document.createAttribute('class');
 pageArt.value = 'all';
 divPage.setAttributeNode(pageArt);
 
 divPage.textContent = pages;
 item.appendChild(divPage);
 

    }



    function complateShelves(book){


      var cover = [];
      var author = [];
      var pages = [];
      var title = [];


  for(var i = 0; i < books.length; i++){

        cover.push(book[i].cover);
        author.push(book[i].author);
        pages.push(book[i].pages);
        title.push(book[i].title);
  }

       createShelves()
  
               function createShelves(){

                    var item = document.querySelectorAll('.item');
                    console.log(item);
 
                     for(i = 0; i < item.length; i++){
 
                      createImg(cover[i], item[i]);
                      createDivForTitle(title[i],item[i])
                      createDivForAuthor(author[i], item[i]);
                      createDivForNUmberOfPage(pages[i], item[i]);
   }
 
 }

}


complateShelves(books)

}


///////////////////////////////////////////////////////////////////////





///////////////////////////// sortiranje ////////////////////////////////////


/////// sortiranje slova
document.querySelector(".sortA").addEventListener('click',generatorForString)


function generatorForString(){

  console.log('radi');

  function compareString(string1, string2){

      if(string1.author > string2.author )
                return 1
      else if(string1.author === string2.author)
                return 0
      else 
               return -1
      
    }    



var sortString = books.sort(compareString);

  console.log(sortString);


  /////// brisanje sarih informacija i dodavanje novih


   elementRemove();

   createNewElement()
}



////// sortiranje brojeva
document.querySelector(".sortB").addEventListener('click', generateForNumber);


function generateForNumber(){

  console.log('radi');

  function compareNumber(number1, number2){

      if(number1.pages > number2.pages )
               return 1
      else if(number1.pages === number2.pages)
               return 0
      else 
              return -1
  }    


 var sortNumber = books.sort(compareNumber)

  console.log(sortNumber);

  /////// brisanje sarih informacija i dodavanje novih


  elementRemove();


  createNewElement();

}



////// vracanje na staro
var reset = document.querySelector('.reset');
console.log(reset);


reset.onclick = function(){

  console.log('redi');



  elementRemove();
  console.log(books);
  console.log(oldShelves);
  complateShelves(oldShelves);
}






////////////////////profesor///////////////////

//Sort numbers in an array in ascending order:h   
// var booksSort = books.sort(function(a, b){
//     return a.pages-b.pages
// });
// var booksSort1 = books.sort(function(a, b){
//     if(a.author < b.author){
//         return -1;
//     }
//     else {
//         return 1;
//     }
// });

// console.log(booksSort);
// console.log(booksSort1);


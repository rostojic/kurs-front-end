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
    
var sortByAuthorBtn = document.getElementById('btn2');
var sortByPageBtn = document.getElementById('btn1');

function sortingByAuthor() {
  var items = document.querySelectorAll('.book');

  Array.from(items).sort(function(a, b) {
    
    a = a.querySelector('.author').innerText.toLowerCase()
    b = b.querySelector('.author').innerText.toLowerCase()
    return (a > b) - (a < b)
  }).forEach(function(n, i) {
    n.style.order = i
  })

}

function sortingByPage(){
  var items = document.querySelectorAll('.book')
  
  Array.from(items).sort(function(a, b) {
    a = ~~a.querySelector('.page').innerText
    b = ~~b.querySelector('.page').innerText
    return a - b
  }).forEach(function(n, i) {
    n.style.order = i
  })
}

sortByAuthorBtn.addEventListener('click', sortingByAuthor);
sortByPageBtn.addEventListener('click', sortingByPage);






    // var btn1 = document.getElementById('btn1');
    
    // btn1.addEventListener('click', function(){
    //   var book = document.querySelectorAll('.book');
    //   var parent = document.querySelector('.container');
    //   var SortElements = new Object();
    //   book.forEach(function(book, indx){
    //   var pages = parseInt(book.querySelector('.page').textContent);
    //   SortElements[pages] = {'element': book, 'index': indx} ;
    // });

    // var keys = Object.keys(SortElements);
    // function compareNumeric(a, b) {
    //   a = parseInt(a);
    //   b = parseInt(b);
    //   if (a > b) return 1;
    //   if (a < b) return -1;
    // };
    
    // keys.sort(compareNumeric);
    // keys.map(function(key, indx){
    //   parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
    //   SortElements[key]['index'] = indx;
    // });
    //   return compareNumeric;
    // },);











    
  //   var btn2 = document.getElementById('btn2');

  //   btn2.addEventListener('click', function(){
  //     var book = document.querySelectorAll('.book');
  //     var authors = String.book.querySelector('.author');
  //     Array.prototype.slice.call(authors).sort(function sort (ea, eb) {
  //         var a = ea.textContent.trim();
  //         var b = eb.textContent.trim();
  //         if (a.textContent < b.textContent) return -1;
  //         if (a.textContent > b.textContent) return 1;
  //         return 0;
  //     }).forEach(function(book) {
  //         parent.book.appendChild(author);
  //         return book;
  //     });
      
  // });


  
  // function sortThem(s) {
  //     Array.prototype.slice.call(document.body.querySelectorAll(s)).sort(function sort (ea, eb) {
  //         var a = ea.textContent.trim();
  //         var b = eb.textContent.trim();
  //         if (a.textContent < b.textContent) return -1;
  //         if (a.textContent > b.textContent) return 1;
  //         return 0;
  //     }).forEach(function(div) {
  //         div.parentElement.appendChild(div);
  //     });
  // }
  // // call it like this
  // sortThem('div.sortme');
  let 
    myLibrary = [],
    save = document.getElementById('plus'),
    main = document.getElementById('table'),
    newPost   = document.createElement('li'),
    newTitle  = document.createElement('h4'),
    newAuteur = document.createElement('h4'),
    newPages  = document.createElement('h4'),
    newEye    = document.createElement('span'),
    newDelete = document.createElement('span');
    


  function Book(title,auteur,pages) {
      //

    this.title  = title,
    this.auteur = auteur,
    this.pages  = pages;
        
  }
  

  function addbookToLibrary(){
    
    let 
        title  = document.getElementById('title').value,
        auteur = document.getElementById('auteur').value,
        pages = document.getElementById('pages').value;

    const  book = new Book(title,auteur,pages);
    myLibrary.push(book);

  }

  

   function render(){

        addbookToLibrary();
        
        
        addHtmlTag();
    }

function addHtmlTag(){
    
  myLibrary.forEach(element => {
    
      newPostTitles = element.title,
      newPostAuteurs = element.auteur,
      newPostPages= element.pages;
      
      
      // console.log(myLibrary.indexOf(element));
      
      
    });

    main.appendChild(newPost);
    newPost.appendChild(newTitle).innerHTML  = newPostTitles,
    newPost.appendChild(newAuteur).innerHTML = newPostAuteurs,
    newPost.appendChild(newPages).innerHTML  = newPostPages;
        
     
  }

    save.onclick = render;
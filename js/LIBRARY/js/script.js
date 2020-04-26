let 
  myLibrary = [],
  deleteBtn = [],
  save = document.getElementById('plus');

save.onclick = render;
    
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

  
  
  function addHtmlTag(){
    let
      main = document.getElementById('table'),
      newPost   = document.createElement('li'),
      newTitle  = document.createElement('h4'),
      newAuteur = document.createElement('h4'),
      newPages  = document.createElement('h4'),
      newEye    = document.createElement('span'),
      newDelete = document.createElement('span');
    
    myLibrary.forEach(element => {
      
       newPost.appendChild(newTitle).innerHTML = element.title;
       newPost.appendChild(newAuteur).innerHTML= element.auteur;
       newPost.appendChild(newPages).innerHTML =  `<span class="page">${element.pages}</span>`;
      
       

    }); 
    main.appendChild(newPost);
    if (readIt.checked) { 
      newPost.appendChild(newEye).outerHTML = '<i class="far fa-eye fa-lg" style="color: brown;align-self: center; padding: 0 10px; margin: 10px;"></i>';
  } else {
    newPost.appendChild(newEye).outerHTML = '<i class="far fa-eye-slash" style="color: #ededed; align-self: center; padding: 0 10px; margin: 10px;"></i>';
  }
  newPost.appendChild(newDelete).outerHTML = '<span><button type="button" id="delete"><i class="fas fa-trash-alt fa-lg" style="color: red; align-self: center; padding: 0 10px; margin: -6px;"></i></button></span>';
  // trashAdd = document.getElementsByName('delete');
  trashs = document.getElementById('delete');
  // for(i= 0; i < trashs.length;i++){
  //   deleteBtn.push(trashs[i]);
  //   console.log(deleteBtn[i]);
  //  }
  // for(i=0; i < deleteBtn.length; i++){
  //         deleteBtn.onclick = function (){
  //           rem = this[i].parentElement.parentElement;
  //           rem.remove(rem); 
  //       }
  // }

   }
  
  
     function render(){
  
          addbookToLibrary(); 
          addHtmlTag();
          // let trashs = document.getElementsByClassName('delete');
         
      
    }

          //  for (i= 0; i <= trashs.length;i++){

          //   deleteBtn.onclick = function (){
          //     rem = this[i].parentElement.parentElement;
          //     rem.remove(rem); 
          // }
          //  }
           
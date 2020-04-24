


 let 
    save = document.querySelector('button'),
    // reset = document.getElementById('reset'),
    bookTitle = document.getElementById('bookTitle'),
    bookAuteur = document.getElementById('bookAuteur'),
    bookPages = document.getElementById('bookPages');


 
    save.onclick =  function (){
        
            let title     =  document.getElementById('title').value,
                auteur    =  document.getElementById('auteur').value,
                pages     =  document.getElementById('pages').value,
                readIt    = document.getElementById('readIt'),
                main      = document.getElementById('table'),
                newBook   = document.createElement('li'),
                newTitle  = document.createElement('h4'),
                newAuteur = document.createElement('h4'),
                newPages  = document.createElement('h4'),
                newEye    = document.createElement('span'),
                newDelete    = document.createElement('span');
                // 
            main.appendChild(newBook);
            newBook.appendChild(newTitle).innerHTML  = title;
            newBook.appendChild(newAuteur).innerHTML = auteur;
            newBook.appendChild(newPages).innerHTML  = pages;
            if (readIt.checked) {
                newBook.appendChild(newEye).outerHTML = '<i class="far fa-eye fa-lg" style="color: brown;align-self: center; padding: 0 10px; margin: 10px;"></i>';
            } else {
                newBook.appendChild(newEye).outerHTML = '<i class="far fa-eye-slash" style="color: #ededed; align-self: center; padding: 0 10px; margin: 10px;"></i>';
            }
            newBook.appendChild(newDelete).outerHTML = '<i class="fas fa-trash-alt fa-lg" style="color: red; align-self: center; padding: 0 10px; margin: 10px;"></i>'
                // console.log(readIt.checked); align-self: center; padding: 0 10px; margin: 10px;
        }
    // function reset(){
         
    //          document.getElementById('title').reset(),
    //          document.getElementById('auteur').reset(),
    //          document.getElementById('pages').reset();
        
    // }
// let titlerr     =  document.getElementById('title').innerHTML;
console.log(document.getElementById('title').value);
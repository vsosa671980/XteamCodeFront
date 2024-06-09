import React, { useEffect, useState } from 'react'
import style from "./pagination.module.css"

interface Props{
  lastPage: number;
  getPage:any;
  totalPages: number;
}

export default function Pagination({ lastPage,getPage,totalPages}:Props) {
  
  const [actualPage,setActualPage] = useState(1);
  const [pages,setPages] = useState<number[]>([]);

  /*
  * Create the initial pages to show and buttons
  * @param default page 1
  */
  const createInitialNumberPages = (startPage:number = 1) => {
    let pages:number[] = []; //Array of pages
    for (let i = actualPage; i <= actualPage + 2; i++) {
      if(i <= totalPages ){
        pages.push(i);
      }
      }
   
    setPages(pages);
  }

  /*
* Call the next page and set page to show
*/
  const createNextNumberPages = () => {
    //Con la condicion de que la pagina actual no sea la ulima
    let nextPage = actualPage + 1;
     // Fijo la pagina actual 
     setActualPage(nextPage);
     console.log(nextPage) // 5 actual Page
     // Set the page
     getPage(nextPage)
     console.log("actual page ",actualPage,"last page ",lastPage
     )
     
  }

/*
* Call the previous page and set page to show
*/
const createPreviousNumberPages = () => {
  // Con la condicion de la que pagina actual no sea la primera
  if (actualPage !== 1) {
    let nextPage = actualPage - 1;
     // ejemplo si estoy en la 1 ahora estoy en la 5
    setActualPage(nextPage);
    getPage(nextPage )
  }
}

/*
* Cath up the number of the button pagination
* Send to parent module 
* put the page to show up
*/
const handleButtonsPagination = (event:any) => {
   let page = event.target.textContent
   getPage(page)
   
}

/*
* Update the number of the buttons pagination
*/
  useEffect(( ) => {
    createInitialNumberPages(actualPage);
  },[actualPage])


  return (
    <div>
         <tr className={style.pagination}>
         {actualPage !== 1 ? (
            <td onClick={createPreviousNumberPages}>
              <img src="/assets/img/flecha-atras.png" className={style.img_pagination} alt="Flecha atrás" />
            </td>
          ) : (
             null
          )}
           {pages.map((page, index) => (
           <td key={index} onClick={handleButtonsPagination}>{page}</td>
           ))}
             {actualPage != lastPage ? (
            <td onClick={createNextNumberPages}>
              <img src="/assets/img/flecha-siguiente.png" className={style.img_pagination} alt="Flecha atrás" />
            </td>
          ) : (
            null
          )} 
            </tr> 
    </div>
  )
}

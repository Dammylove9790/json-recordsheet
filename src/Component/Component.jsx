
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

function SearchButton() {
    const [searchWord, setsearchWord] = useState('')
    const searchItem = (searchvalue) => {
        setsearchWord(searchvalue)
        console.log(searchWord) 
    } 

    return (
    <div>
      <input type="text" name="search" onChange={(e) => searchItem(e.target.value) } />
        <Link to={`/searchproduct/${searchWord}`}>Search</Link>
    </div>
  )
}




function Button ({productId}) {
   
    return (
      <div className='product-button'>
  
          <Link to={`product/${productId}`}>Buy Now <i class="fa-solid fa-credit-card"></i></Link>
          <Link to={`product/${productId}`}>Add to Cart <i class="fa-solid fa-cart-arrow-down"></i></Link>
      </div>
    )
  }

const ButtonClick = () => {
}

const FavoriteButton = () => {
  const [click, setClick] = useState(false)

  const CheckClick = () => {
    setClick(!click)
  }


    return (
      <span className= {click ? 'add-to-favorite-container-click' : 'add-to-favorite-container'} onClick={CheckClick}>
        {/* <span className='add-to-favorite-container ' onClick={(event)=>{CheckClick(event)}} style={{color : }}> */}
      <i class="fa-solid fa-heart add-to-favorite"></i>
        </span>
    )
}

export {SearchButton, Button, FavoriteButton}

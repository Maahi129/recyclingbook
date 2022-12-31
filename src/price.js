import React from 'react';
import img1 from './images/price_book.png';
import img2 from './images/image_books-removebg-preview.png';
import img3 from './images/newspaper-removebg-preview.png';


const Price = () => {
return (
	<div class="card1">
	<div className="card">
	<img src={img1} alt="" className="abook"/>
	<h2 className="heading2">Weight  : Up to 5kg </h2>
	<h3 className="head2">Price(INR) : 10 Rupee</h3>
	<h3 className="head3">Price(USD)   :  0.12  USD</h3>
	</div>

	<div className="card">
	<img src={img2} alt="" className="abook"/>
	<h2 className="heading2">Weight  : More than 5kg </h2>
	<h3 className="head2">Price(INR) : 12 Rupee</h3>
	<h3 className="head3">Price(USD)   :  0.14  USD</h3>
	</div>

	<div className="card">
	<img src={img3} alt="" className="abook"/>
	<h2 className="heading2">Weight  : 1kg to 100kg </h2>
	<h3 className="head2">Price(INR) : 10 Rupee</h3>
	<h3 className="head3">Price(USD)   :  0.12  USD</h3>
	</div>
	</div>
);
};

export default Price;
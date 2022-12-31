import React from "react";
import Slide from "./swiper"
import Footer from "./footer"
import image1 from './images/abook.png'

const Home = () => (
  <div className="curve">
  <div id="rcorners1">

  <p class = "quote"> REUSE  </p>
  <p class = "quote"> THE PAST </p>
  <p class = "quote"> RECYCLE </p>
  <p class = "quote"> THE PRESENT </p>
  <p class = "quote"> SAVE   </p>
  <p class = "quote"> THE FUTURE </p>
    </div>
    <img src={image1} alt="" class="head-img"/>
    <div>
    <h1 className="title is-1">RECYCLE</h1>
    <h3 className="para">
      Recycling is a key component of modern waste reduction and is the third component of the  </h3>
      <h3 className="para">"Reduce, Reuse, and Recycle" waste hierarchy. It promotes environmental sustainability by </h3>
      <h3 className="para">removing raw material input and redirecting waste output in the economic system. There </h3>
      <h3 className="para">are some ISO standards related to recycling, such as for plastics waste and  for environmental </h3>
      <h3 className="para">management control of recycling practice. </h3>

    <a href="https://bookscouter.com/blog/how-to-recycle-books/" class="button">BLOG</a>
      <a href="./contact" class="button" id="btn1">Contact Us</a>
      </div>
      <div className="slides">
      <Slide />


       <h1 className="title1 is-2">Benefits Of Recycling</h1>
       <h3 className="para1">
       1. 94% of the natural resources used by Americans are non-renewable.</h3>
       <h3 className="para1">Non-renewable, natural resource use has increased from 59% in 1900</h3>
       <h3 className="para1"> and 88% in 1945.</h3>
         <h3 className="para1">2. Recycling saves non-renewable resources.</h3>
         <h3 className="para1">3. It takes 95% less energy to recycle aluminum than it does to make it </h3>
         <h3 className="para1">  from raw materials.</h3>
         <h3 className="para1">4. Making products from recyclables results in energy savings</h3>
         <h3 className="para1">5. Recycled steel saves 60% production energy, recycled newspaper 40%, </h3>
         <h3 className="para1"> recycled plastics 70%, and recycled glass 40%. </h3>
         <h3 className="para1">6. Using scrap steel instead of virgin ore to make new steel takes 40% </h3>
         <h3 className="para1"> less water and creates 97% less mining waste.</h3>
       </div>

        <div>
       <Footer />
       </div>



  </div>
);

export default Home;



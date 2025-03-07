import * as bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Corousel=()=>{
    return <>
 
 <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="/images/shoe1.jpg" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="/images/shoe4.jpg" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="/images/shoe6.jpg" src="..." alt="Third slide"/>
    </div>
  </div>
</div>
    </>
}

export default Corousel
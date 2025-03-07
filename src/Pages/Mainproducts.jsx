import Cards from "../Components/Cards"
import { Link } from "react-router-dom"
const Mainproducts=({shoeData})=>{
    return <>
    <div className="main_product">
   
    <div className="category_col">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", height:"100vh",position:"sticky",overflowY:"auto" ,top:"0"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Products
        </a>
      </li>
      <li>
       <Link to={'/'}><a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
         Home
        </a></Link> 
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Orders
        </a>
      </li>
    
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>

    <div className="filter_col">

        {/* <div className="filter_col_1">
            <ul>
                <li>Shop</li>
                <li>Sort</li>
                <li><search>hey</search></li>
            </ul>
        </div> */}
        <div className="filter_col_1">
        <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
</div>
        
        <div className="filter_col_2">
            <Cards shoeData={shoeData}></Cards>
        </div>
    </div>
    </div>

    </>
}
export default Mainproducts
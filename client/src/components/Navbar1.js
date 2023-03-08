
import { Outlet } from "react-router-dom";
import "../css/Navbar1.css";

function Header() {
  return (
    <>
    <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center ff">
    <div class="container">
        <a href="/" class="navbar-brand d-flex w-50 me-auto">Sri Sarvam Oils</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="navbar-nav w-100 justify-content-center">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/products">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/SignUp">SignUp</a>
                </li>
               
            </ul>
        </div>
    </div>
</nav>
<Outlet/>
</>
  );
}

export default Header;
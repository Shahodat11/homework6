import React from 'react'
import '../headertop/headerTop.css'
import logo from '../images/div.cr-category-toggle.svg'

function HeaderTop() {
  return (
    <>
    <div className="container">
        <div className="nav-link">
            <div className="nav">
                <img src={logo} alt="" />
            </div>
            <div className="nav1">
                <div className="nav-item1">
                    <a href="#">Home</a>
                    <select name="catalog" id="catalog">
                        Category
                        <option value="ct">Category</option>
                        <option value="ct">Category</option>
                    </select>
                    <select name="catalog" id="catalog">
                        Products
                        <option value="ct">Products</option>
                        <option value="ct">Products</option>
                    </select>
                    <select name="catalog" id="catalog">
                        Pages
                        <option value="ct">Pages</option>
                        <option value="ct">Pages</option>
                    </select>
                    <select name="catalog" id="catalog">
                        Blog
                        <option value="ct">Blog</option>
                        <option value="ct">Blog</option>
                    </select>
                    <select name="catalog" id="catalog">
                        Elements
                        <option value="ct">Elements</option>
                        <option value="ct">Elements</option>
                    </select>
                </div>
            </div>
            <div className="nav2">
                <h4>+123 ( 456 ) ( 7890 )</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeaderTop
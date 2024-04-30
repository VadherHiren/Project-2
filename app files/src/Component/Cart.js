import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

function Cart() {
    const [cartdata, setcartdata] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getlist()
    }, []);

    function getlist() {
        fetch("http://localhost:4000/addtocart")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setcartdata(data);
            });
    }

    var initialValue = 1;
    const [countValue, setCountValue] = useState(initialValue);

    const increment = () => setCountValue(countValue + 1);
    const decrement = () => setCountValue(countValue - 1);

    function deletequantity(id) {
        fetch(`http://localhost:4000/addtocart/${id}`, {
            method: 'DELETE'
        })
            .then((res) => {
                if (res) {
                    alert("Successfully Deleted...!");
                    getlist()
                    //   navigate('/cart')
                }
            })
        // .then((result) => {
        //     result.json().then((resp) => {
        //         console.warn(resp)
        //         getlist()
        //     })
        // })
    }


    return (
        <div>




            {/* <!-- Start Hero Section --> */}
            {/* <div class="hero">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                                <h1>Cart</h1>
                            </div>
                        </div>
                        <div class="col-lg-7">

                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- End Hero Section --> */}

            <div class="untree_co-section before-footer-section">
                <div class="container">
                    <div class="row mb-5">
                        <form class="col-md-12" method="post">
                            <div class="site-blocks-table">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Image</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-total">Total</th>
                                            <th class="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cartdata &&
                                            cartdata.map((item) => (
                                                <tr key={item.id} className='addcart-item-list'>
                                                    <td class="product-thumbnail">
                                                        <img src={item.img} alt="Image" class="img-fluid" />
                                                    </td>
                                                    <td class="product-name">
                                                        <h2 class="h5 text-black">{item.name}</h2>
                                                    </td>
                                                    <td>{item.price}</td>
                                                    <td>
                                                        <div class="input-group mb-3 d-flex align-items-center quantity-container">
                                                            <div class="input-group-prepend">
                                                                <button class="" onClick={decrement} type="button">-</button>
                                                            </div>
                                                            <input type="text" class=" text-center quantity-amount" value={countValue} />
                                                            <div class="input-group-append">
                                                                <button class="" onClick={increment} type="button">+</button>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td>$49.00</td>
                                                    <td>
                                                        <button type='button' className='btn btn-danger' onClick={() => { deletequantity(item.id) }}> Remove </button>
                                                        {/* <a href="#" class="btn btn-black btn-sm">X</a> */}
                                                    </td>
                                                </tr>

                                            ))}

                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12 text-right border-bottom mb-5">
                                    <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <span class="text-black">Subtotal</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <strong class="text-black">$230.00</strong>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col-md-6">
                                    <span class="text-black">Total</span>
                                </div>
                                <div class="col-md-6 text-right">
                                    <strong class="text-black">$230.00</strong>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 pl-5">
                            <div class="row justify-content-end">
                                <div class="col-md-7">
                                    <div class="row">
                                        <div class="col-md-12">
                                        {/* <Link className="nav-link" to="/shop">Shop</Link> */}
                                            <Link to="/checkout"><button class="btn btn-outline-success btn-lg py-3 btn-block" >Proceed To Checkout</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

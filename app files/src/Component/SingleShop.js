import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingleShop() {

    const [id1, setId1] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState();

    const naviagte = useNavigate();

    const { id } = useParams();
    // const [d, setid] = useState(num);

    useEffect(() => {
        fetch('http://localhost:4000/ShopData/' + id)
            .then((res) => { return res.json() })
            .then((data) => {
                setId1(data.id)
                setName(data.name)
                setPrice(data.price)
                setImg(data.img)
                // console.log(img)
            })
    })
    const addtocart = () => {
        const obj = { img: img, name: name, price: price };
        fetch('http://localhost:4000/addtocart', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then((res) => {
                if (res.ok) {
                    // alert('Added to cart successfully!');
                    toast.success('Added to cart successfully!');
                } else {
                    // alert('Failed to add in cart');
                    toast.error('Failed to add to cart');
                }
            })
        window.location.reload()
    };
    const backToShoping = () => {
        naviagte('/shop')
    };
    return (
        <div className=''>


            {/* <!-- Start Hero Section --> */}
            <div className="hero hero-cus">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Single Shop</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}


            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">

                        <div className="col-lg-6">
                            <div className="img-wrap">
                                {/* <img src={img} alt="Image" className="img-fluid"></img> */}
                                <img src="/images/car/black-wagon.jpeg" style={{height: "350px"}} alt="Image" class="img-fluid product-thumbnail"/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-lg-6-cus">
                            <h2 className="section-title">{name}</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada.
                                Nullam ac aliquet velit.
                                Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                            <p>Donec vitae odio quis nisl dapibus malesuada.
                                Nullam ac aliquet velit.
                                Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>

                            <div className='color-div'>
                                <p className='color-change1'></p>
                                <p className='color-change2'></p>
                                <p className='color-change3'></p>
                                <p className='color-change4'></p>
                                <p className='color-change5'></p>
                            </div>
                            <h5>Price: {price}</h5>

                            <div className='row single-addcart-btn'>
                                
                                <div className="col-lg-6">
                                    <button type="button" onClick={() => { addtocart() }} class="btn btn-outline-info">Add To Cart</button>
                                </div>
                                <div className="col-lg-6">
                                    <button type="button" onClick={() => { backToShoping() }} class="btn btn-outline-primary">Back to Shpoing</button>
                                </div>

                            </div>


                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- End Why Choose Us Section --> */}
            <ToastContainer />

        </div>
    )
}

export default SingleShop

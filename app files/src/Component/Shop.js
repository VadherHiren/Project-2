import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Shop() {

    const [details, setDetails] = useState();
    const naviagte = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/ShopData")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDetails(data);
                // console.log(data.url)
            });
    }, []);

    const handleView = (id) => {
        console.log(id);
        naviagte("/view/" + id)
      }


    return (
        <div>

            {/* <!-- Start Hero Section --> */}
            <div class="hero">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-5">
                            <div class="intro-excerpt">
                                <h1>Shop Cars...</h1>
                            </div>
                        </div>
                        <div class="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            {/* api get */}

            <div class="untree_co-section product-section before-footer-section">
                <div class="container">
                    <div class="row">

                        {/* <!-- Start Column 1 --> */}
                        {/* <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <a class="product-item" href="#">
                                <img src="images/car/black-wagon.jpeg" class="img-fluid product-thumbnail" />
                                <h3 class="product-title">Black G-Wagon</h3>
                                <strong class="product-price">2 Cr.</strong>

                                <span class="icon-cross">
                                    <img src="images/cross.svg" class="img-fluid" />
                                </span>
                            </a>
                        </div> */}


                        {/* <tbody> */}
                        {details &&
                            details.map((car) => (
                                // <ul className='ul-li' key={car.id}>
                                //     {/* <td>{car.id}</td> */}
                                //     <li className='ul-li'>
                                <div class="col-12 col-md-4 col-lg-3 mb-5">
                                    <a onClick={() => { handleView(car.id) }}  class="product-item" href="#">
                                        <img style={{height:"200px"}} src={car.img} class="img-fluid product-thumbnail"/>
                                        <h3 class="product-title">{car.name}</h3>
                                        <strong class="product-price">{car.price}</strong>

                                        <span class="icon-cross">
                                            <img src="images/cross.svg" class="img-fluid" />
                                        </span>
                                    </a>
                                    {/* <button className="btn btn-info"></button> */}

                                </div>
                                //         </li>
                                //     {/* <td></td> */}
                                // </ul>
                            ))}
                        {/* </tbody> */}




                    </div>
                </div>
            </div>

            {/* api get */}

        </div>
    )
}

export default Shop

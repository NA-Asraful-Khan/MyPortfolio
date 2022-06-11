import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Image/Port1.png'
import image2 from '../Image/Port2.png'
import image3 from '../Image/Port3.png'
import image4 from '../Image/Port4.png'

const MyPorfolio = () => {
    return (
        <div className="bg-white p-8">
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 place-items-center'>
                <div class="card bg-white-grey shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img className="rounded-xl" src={image1} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl">Automotive Parts Manufacturing</h2>
                        <h3 className='text-xl'>Technology: React,React Router,Express JS, Node js, MongoDB, Firebase Authentication</h3>
                        <p>This is a website for a parts manufacturing company where a customer can place the order and pay the bill via credit card and also drop a review. And there is also admin dashboard where an admin can add product, delete product, make someone admin, canceling order etc.</p>
                        <div class="card-actions">
                            <Link className='btn btn-primary' to="/Portfolio/Automotive-Parts-Manufacturing">Details</Link>
                            <a className='btn btn-primary' href="https://tool-e56ed.web.app/" target="_blank">Live Link</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-white-grey shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img className="rounded-xl" src={image2} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl">AutoMobile Inventories</h2>
                        <h3 className='text-xl'>Technology: React,React Router,Express JS, Node js, MongoDB, Firebase Authentication</h3>
                        <p>This is a Inventory Management Website. Here a user can check his stock of the product. Update the quantity of the product and also Decrease the Quantity of the product if any product delivered. User can also delete the product if any product isout of stock.</p>
                        <div class="card-actions">
                            <Link className='btn btn-primary' to="/Portfolio/AutoMobile-Inventories">Details</Link>
                            <a className='btn btn-primary' href="https://inventory-7521f.web.app/" target="_blank">Live Link</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-white-grey shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img className="rounded-xl" src={image3} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl">ANGELS MAKEUP</h2>
                        <h3 className='text-xl'>Technology: React,React Router,Firebase Authentication</h3>
                        <p>This is a Authenticated Website where user can sign up, sign in with email and password. A user can also sign in/sign up with google account.Here is some protected route where a user cannot access if he/she is not logged in.</p>
                        <div class="card-actions">
                            <Link className='btn btn-primary' to="/Portfolio/ANGELS-MAKEUP">Details</Link>
                            <a className='btn btn-primary' href="https://serviceing-6e26a.web.app/" target="_blank">Live Link</a>
                        </div>
                    </div>
                </div>

                <div class="card bg-white-grey shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img className="rounded-xl" src={image4} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl">My Photograpy</h2>
                        <h3 className='text-xl'>Technology: React,React Router,Firebase Authentication</h3>
                        <p className='mb-6'>I use React Routing. That was fun to use. I create 404 route for unavailable route. I use Custome Hooks for reuse the same type of work again. I use Rechart for dashboard</p>
                        <div class="card-actions">
                            <Link className='btn btn-primary' to="/Portfolio/My-Photograpy">Details</Link>
                            <a className='btn btn-primary' href="https://photoprahy-routing.netlify.app/" target="_blank">Live Link</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyPorfolio;
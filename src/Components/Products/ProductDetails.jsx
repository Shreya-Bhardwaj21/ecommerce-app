import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useGetApiData from "../Utils/useGetApiData";
export default function ProductDetails() {
    let { id } = useParams();
    let item = useGetApiData(id);

    return (
        <>
            <section className="container-fluid mt-5">
                <div>
                    <h3 className="text-center">Product details</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit quia vero, cumque exercitationem possimus nam aliquam fugit, amet delectus iure dolorem quasi doloremque neque sequi? Sunt porro, maxime aliquam, exercitationem quia magnam quod reprehenderit, distinctio eius officiis ratione magni saepe perspiciatis deserunt modi rerum optio. Omnis doloribus mollitia alias.</p>
                </div>
            </section>
            <section className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <img src={item.image} alt="" height={200} />
                            </div>
                            <div className="col-8">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <h3>${item.price}</h3>
                            </div>
                        </div>
                        <button className="mt-5 btn btn-dark"><Link to="/productsList" className="nav-link">Back</Link></button>
                    </div>
                </div>
            </section>
        </>
    );
}

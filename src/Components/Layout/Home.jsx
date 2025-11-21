import React from "react";
import { Link } from "react-router-dom";

export default function Home() {


    return (
        <>
            <section className=" home-section container-fluid d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h2>Shop with us For Better Experiance</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit quia vero, cumque
                        exercitationem possimus nam aliquam fugit, amet delectus iure dolorem quasi doloremque neque sequi?
                        Sunt porro, maxime aliquam, exercitationem quia magnam quod reprehenderit, distinctio eius officiis
                        ratione magni saepe perspiciatis deserunt modi rerum optio. Omnis doloribus mollitia alias.
                    </p>
                    <button className="btn btn-dark"><Link to="/productsList" className="nav-link">Shop Now</Link></button>
                </div>
            </section>

        </>
    );
}

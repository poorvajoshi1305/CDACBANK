
import React from "react";
import { Carousel } from "react-bootstrap";

function AboutUs() {
    return (

        <div className="mt-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://about.bankofamerica.com/content/dam/about/images/slider/en/masthead-1-v3-gettyimages-1282319893.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://about.bankofamerica.com/content/dam/about/images/slider/en/masthead-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://about.bankofamerica.com/content/dam/about/images/slider/en/masthead-3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default AboutUs;
import React from 'react';
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import image1 from '../assets/bio_and_beyond.jpeg'
import image2 from "../assets/wise_sci_and_engineering.png"
import image3 from "../assets/abstractions.jpeg"
import image4 from "../assets/earth.jpeg"
import image5 from "../assets/tlas.jpeg"
import image6 from "../assets/cosmos.jpeg"
import image7 from "../assets/poetry.jpeg"
import image8 from "../assets/aging.png"
import image9 from "../assets/alliance.png"
import image10 from "../assets/maxplanck.jpeg"

export default class channels extends React.Component {
    constructor() {
        super();
        this.state = {
            channelArray: [
               { image: image1,
                header1: "Making Sense of the Genome, at Last",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/cshl/logo_short.jpg",
                header2: "by Adam Piore"
               },
               {
                image: image2,
                header1: "Your Brain is On the Brink of Chaos",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/wise/logo_short.jpg",
                header2: "by Kelly Clancy"
               },
               {
                image: image3,
                header1: "Mathematicians Calculate How Randomness Creeps In",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/abstractions/logo_short.svg",
                header2: "by Marcus Woo"
               },
               {
                image: image4,
                header1: "The Deep Time of Walden Pond",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/earth/logo_short.jpg",
                header2: "by Curt Stager"
               },
               {
                image: image5,
                header1: "The Best Burger Place is a Lab",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/tlas/logo_short.svg",
                header2: "by Thomas King" 
               },
               {
                image: image6,
                header1: "How Much Should Expectation Drive Science?",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/cosmos/logo_short.svg",
                header2: "by Claudia Geib"
               },
               {
                image: image7,
                header1: "Our Observation and Imagination",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/poetry/logo_short.jpg",
                header2: "by Gillian Osborne"
               },
               {
                image: image8,
                header1: "Yes, Life in the Fast Lane Kills You",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/aging/logo_short.svg",
                header2: "by Phillip Ball"
               },
               {
                image: image9,
                header1: "Taking to the Stars",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/alliance/logo_short.png",
                header2: "by Science Philanthropy Alliance"
               },
               {
                image: image10,
                header1: "Understanding the Brain with the Help of Artificial Intelligence",
                imageHead: "http://nautilus-vertical.s3.amazonaws.com/vert/alliance/logo_short.png",
                header2: "by Max Planck Institute of Neurobiology"
               }

            ]
        }
    }

    render() {
        let channelArray = this.state.channelArray;
        const channel = channelArray.map((channel, i) => {
            return(
                <Col md={4}>
                    <img className = "channelImageHeader" src={ channel.imageHead } alt="title" />
                    <br />
                    <img className = "channelImage" src={channel.image} key= {i} alt="channel" />
                    <h2 className = "channelHeaderMain">{ channel.header1 }</h2>
                    <h6 className = "channelHeaderSub">{ channel.header2 }</h6>
                </Col>
            )
        })

        return(
            <Container>
                <Row>
                   { channel } 
                </Row>
            </Container>
        )
    }
}
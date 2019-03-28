import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "../../../node_modules/mdbreact";
class Slide extends Component {
  render() {
    return (
      <MDBContainer style={{ minWidth: "100%", marginLeft: "" }}>
        <MDBCarousel
          activeItem={1}
          length={5}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide1.jpg")}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide2.jpg")}
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide3.jpg")}
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide4.jpg")}
                  alt="Mattonit's item"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide5.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="6">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide6.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="7">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide7.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="8">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide8.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="9">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide9.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="10">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide10.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="11">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide11.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="12">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide12.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="13">
              <MDBView>
                <img
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  src={require("./images/slide13.jpg")}
                  alt="Fifth slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                {/* <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p> */}
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default Slide;

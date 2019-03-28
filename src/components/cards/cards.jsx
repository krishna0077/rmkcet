import React, { Component } from "react";
import "./card.css";
class Cards extends Component {
  state = {
    cards: [
      {
        id: 1,
        images: "computerCard",
        title: "Computer Science and Engineering",
        link: "/computer"
      },
      {
        id: 2,
        images: "eceCard",
        title: "Electrical and Communication Engineering",
        link: "/computer"
      },
      {
        id: 3,
        images: "c05",
        title: "Electrical and Electronics Engineering",
        link: "/computer"
      },
      {
        id: 4,
        images: "mechanicalCard",
        title: "Mechanical Engineering",
        link: "/computer"
        // styleCard: "cards col-lg-3 m-5"
      },
      {
        id: 5,
        images: "s&hCard",
        title: "Science and Humanities",
        link: "/computer"
      }
    ]
  };
  render() {
    return (
      <section className="courses">
        <div className="card-columns">
          {this.state.cards.map(card => (
            <React.Fragment key={card.id}>

              <div className="mask flex-center rgba-blue-light course-single">
                <div className="card m-4 course-thumb" style={{ width: "80%" }}>
                  <img
                    src={require(`./images/${card.images}.jpg`)}
                    alt="Cardimagecap"
                    className="img-responsive"
                    style={{ width: "100%" }}
                  />
                  <div className="card-body course-details" style={{ marginLeft: "-2%" }}>
                    <h5 className="card-title">{card.title}</h5>

                    {/* <a href={card.link} className="btn btnpn-primary">
                      View More
                    </a> */}
                  </div>
                  <div className="course-hover">
                      <div className="course-hover-content">
                          <a href={card.link} className="btn btnpn-primary">View Details</a>
                      </div>
                    </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    );
  }
}

export default Cards;

import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import "./Schedule.css";

function Schedule() {
  const items = [
    {
      header: "Mở bán vé",
      description: "Description Mở bán vé",
      time: "00:00 AM",
      date: "Oct 01 2020 - Oct 30 2020",
    },
    {
      header: "Check-in",
      description: "Description Check-in",
      time: "17:00 - 19:00",
      date: "Dec 05 2020",
    },
    {
      header: "Xem biểu diễn",
      description: "Description Xem biểu diễn",
      time: "19:00 PM",
      date: "Dec 05 2020",
    },
  ];
  return (
    <Segment
      inverted
      vertical
      padded="very"
      style={{
        background:"linear-gradient(#000000,rgba(0, 0, 0, 0.2)),url(img/lich.jpg)",
        backgroundSize:"cover",
      }}
    >
      <Header sub textAlign="center" className="section-header">
        Lịch trình
      </Header>
      <Container>
        <Divider inverted horizontal>
          <Icon name="calendar outline" />
        </Divider>
      </Container>
      <Container style={{
        marginTop:"5px",
        paddingRight: "15px",
        paddingLeft: "15px"}}>
        <Grid.Row>
          <div className="col-md-10">
            <ul className="cbp_tmtimeline" style={{marginTop:" 20px"}}>
          {items.map((item, index) => (
            <li key={index}>
              <time className="cbp_tmtime">
                <span>{item.time}</span>
                <span>{item.date}</span>
              </time>
              <div className="cbp_tmicon bg-info">
                <Icon name="time" />
              </div>
              <div className="cbp_tmlabel">
                <Header size="huge">
                  {item.header}
                </Header>
                  <p>
                  {item.description}
                  </p>
                
                {/* {item.description} */}
              </div>
            </li>
          ))}
            </ul>
          </div>
        </Grid.Row>
      </Container>
    </Segment>
  );
}

export default Schedule;

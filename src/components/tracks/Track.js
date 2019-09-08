import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

function Track(props) {
  const { track } = props;
  return (
    <div className="col-md-6">
      <Card>
        <CardHeader>{track.track_name}</CardHeader>
        <CardBody>
          <CardTitle>
            {" "}
            <i className="fas fa-play"></i> <strong>Artist </strong>:{" "}
            {track.artist_name}
          </CardTitle>
          <CardText>
            <i className="fas fa-compact-disc" /> <strong>Album</strong> :{" "}
            {track.album_name}
          </CardText>
          <Link
            className="btn btn-dark btn-block"
            to={`lyrics/track/${track.track_id}`}
          >
            <i className="fas fa-chevron-right" />
            View Lyrics
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
export default Track;

import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default function Command(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.command.title}</Popover.Title>
      <Popover.Content>Example use: {props.command.usage}</Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <div className="command">
        <h5> {props.command.title} </h5>
        <p> {props.command.description} </p>
      </div>
    </OverlayTrigger>
  );
}

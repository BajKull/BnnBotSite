import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

export default function Command(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.command.title}</Popover.Title>
      <Popover.Content>{props.command.usage}</Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <div className="command">
        <h6> {props.command.title} </h6>
        <p> {props.command.description} </p>
      </div>
    </OverlayTrigger>
  );
}

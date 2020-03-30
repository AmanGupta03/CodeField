import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./CardComponent.css";

export default class CardComponent extends Component {
  render() {
    return (
      <Card className="main-card" variant="outlined">
        <CardContent>
          <div className="card_icons">
            <img src={this.props.img_path} alt="icon"/>
          </div>
          <Typography variant="h5" component="h2">
            {this.props.main_content}
          </Typography>
          <br />
          <Typography className="" color="textSecondary" gutterBottom>
            {this.props.supplementary_content}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to={this.props.onClickRoute}
            style={{ textDecoration: "none" }}
            className="card-btns"
          >
            <Button size="medium" variant="outlined">
              <b>{this.props.buttonText}</b>
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}
import React, { Component, Fragment } from "react";
import CardComponent from "./CardComponent";
import arena_icon from "./icons/arena_icon.png";
import mashup_icon from "./icons/mashup_icon.png";
import practice_icon from "./icons/practice_icon.jpeg";

export default class Cards extends Component {
  render() {
    return (
      <Fragment>
        <CardComponent
          img_path={arena_icon}
          main_content="CodeArena"
          supplementary_content="Participate in past Codechef contest and compare your rank with leaderboard"
          buttonText="CodeArena"
          onClickRoute="/code_arena"
        />
        <CardComponent
          img_path={mashup_icon}
          main_content="Mashup"
          supplementary_content="Quickly get a contest from your unsolved codechef problem of varying difficulies"
          buttonText="Mashup"
          onClickRoute="/mashup"
        />
        <CardComponent
          img_path={practice_icon}
          main_content="Practice"
          supplementary_content="Practice on topic wise list of Codechef problems"
          buttonText="Practice"
          onClickRoute="/practice"
        />
      </Fragment>
    );
  }
}
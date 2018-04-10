import Page from "../layouts/main";
import { Component } from "react";

import * as classnames from "classnames";
import BlockList from "../components/blocks/blockList";
import Button from "../components/shared/button";
import Inspector from "../components/editor/inspector";

class Index extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    let navClass = classnames("inspector", {
      open: this.state.visible
    });

    return (
      <Page>
        <Inspector navClass={navClass} />
        <p>Select your next block</p>
        <Button title="test" onClickButton={this.toggleMenu} />
        <BlockList />
      </Page>
    );
  }
}

export default Index;

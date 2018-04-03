import { Fragment, Component } from "react";
import CoverImage from "./coverImage";

/** Create a generic component wrapper to allow for dynamic components */
const Components = {
  coverImage: CoverImage
};

class BlockList extends Component {
  render() {
    const Component = Components["coverImage"];
    return (
      <Fragment>
        <Component />
      </Fragment>
    );
  }

  /**
   * Here we will need a method for dynamically creating a
   * component when the global state tells us to do so
   * onAddComponent() {
   * }
   */
}

export default BlockList;

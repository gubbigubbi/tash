import { Component } from 'react';
import * as classnames from "classnames";

/**
 * Blocks
 */
import CoverImage from '../components/blocks/coverImage';

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
        console.log(this.state.visible);
    }

    render() {

        let navClass = classnames('inspector', {
            'open' : this.state.visible
        });

        return (
        <div>
            <nav className={navClass}>
                <label>Title text</label>
            </nav>
            <p>Select your next block</p>
            <a onClick={this.toggleMenu}>Cover Image</a>
            <style jsx>{`
            .inspector {
                position: fixed;
                width: 10rem;
                background-color: #292929;
                color: rgb(170, 170, 170);
                padding: 1rem;
                top: 0;
                left: 0;
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            .inspector.open {
                transform: translateX(0%);
            }
            `}</style>
            <CoverImage />
        </div>

        )
    }
}
  
export default Index
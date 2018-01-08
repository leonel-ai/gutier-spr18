import React, {Component} from 'react';

import '../styles/Main.css';
import 'animate.css';


class Form extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <form action="https://formspree.io/leonelaguzman1@gmail.com"
                    method="POST">
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="_replyto" />
                    <label>Message</label>
                    <textarea type="text" name="subject" />
                    <br/>
                    <button type="submit" value="Send">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
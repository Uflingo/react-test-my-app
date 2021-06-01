import React, {Component} from 'react';
import './post-add-form.css'

export default class PostAddForm extends Component{

    render() {
        return (
            <div className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="What are you thinking of right now"
                    className="form-control new-post-label"
                />
                <button
                    type="submit"
                    className="btn btn-outline=secondary"
                    onClick={() => this.props.onAdd("qweqwe")}>
                    Add
                </button>
            </div>
        )
    }
}

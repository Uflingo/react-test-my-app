import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'That is so good', important: false, id: 2},
                {label: 'I need a break...', important: false, id: 3}
            ]
        };
        this.maxId = 4;

        this.deleteRecord = this.deleteRecord.bind(this);
        this.addRecord = this.addRecord.bind(this);
    }

    deleteRecord(id) {
        this.setState(({data}) => {
            const findIndex = data.findIndex((e) => e.id === id);
            const newData = [...data.slice(0, findIndex), ...data.slice(findIndex + 1)];
            return {
                data: newData
            }
        })
    }

    addRecord(text) {
        this.setState(({data}) => {
            const newPost = {
                label: text, important: false, id: this.maxId++
            }
            return {
                data: [...data, newPost]
            }
        })
    }

    render() {
        return (<div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteRecord}/>
                <PostAddForm onAdd={this.addRecord}/>
            </div>
        );
    }

}

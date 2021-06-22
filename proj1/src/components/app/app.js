import React, { Component } from 'react';
import nextId from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Going to learn React', like: false, id: nextId() },
                { label: 'That is so good', like: false, id: nextId() },
                { label: 'I need a break...', like: false, id: nextId() },
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr,
            };
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId(),
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    }

    changeStateItem(id, item) {
        this.setState(({ data }) => {
            const index = data.findIndex((item) => item.id === id)
            const oldItem = data[index]
            const newItem = { ...oldItem, [item]: !oldItem[item] }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.changeStateItem(id, 'important')
    }

    onToggleLiked(id) {
        this.changeStateItem(id, 'like')
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => item.label.indexOf(term) > -1)
    }

    filterPosts(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({ term })
    }

    onFilterSelect(filter) {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state

        const allPosts = data.length
        const liked = data.filter(item => item.like).length

        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter)

        return (
            <div className='app'>
                <AppHeader
                    allPosts={allPosts}
                    liked={liked} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <PostAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

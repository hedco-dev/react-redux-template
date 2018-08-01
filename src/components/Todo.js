import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './List';
import Control from './Control';
import Loader from './Loader';
import * as todoActions from '../actions/todoAction';

class Todo extends Component {
    state = {
        items: [],
        item: undefined
    };

    onItemDeleteHandler = (e, item) => {
        this.props.deleteTodo(item.id);
    }

    onItemEditHandler = (e, edititem) => {
        this.props.goforeditTodo(edititem);
    }

    OnSavedHandler = (e, txt) => {
        this.setState(
            (prevState) => {
                if (!this.state.item) {
                    return {
                        items: [...prevState.items, {
                            title: txt,
                            id: Date.now()
                        }]
                    };
                }
                return {
                    items: prevState.items.map(
                        (item) => {
                            if (item.id === this.state.item.id) {
                                return Object.assign({}, item, { title: txt });
                            }
                            return item;
                        }
                    ),
                    item: undefined
                };
            }
        );
    }

    render() {
        return (
            <div style={{marginTop:"20px"}}>
                <Loader loading={this.props.loading} />
                <div>
                    <Control
                        onSaved={this.OnSavedHandler}
                        item={this.state.item}
                    />
                </div>
                <div>
                    <List
                        items={this.state.items}
                        onItemDelete={this.onItemDeleteHandler}
                        onItemEdit={this.onItemEditHandler}
                    />
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        ...state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(todoActions, dispatch)
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Todo);

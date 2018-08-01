import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Item from './Item';
import * as todoActions from '../actions/todoAction';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map(
                        (item) => (
                            <Item
                                item={item}
                                key={item.id}
                                onItemDelete={this.props.onItemDelete}
                                onItemEdit={this.props.onItemEdit}
                            />
                        )
                    )}
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    item: PropTypes.object
}

const mapStatetoProps = (state) => {
    return {
        ...state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    // return {
    //     createTodo: (todo) => dispatch(todoActions.createTodo(todo))
    // }
    const x = {
        ...bindActionCreators(todoActions, dispatch)
    }
    //const x = bindActionCreators2(todoActions, dispatch)
    return x;
}
export default connect(mapStatetoProps, mapDispatchToProps)(List);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoAction';
import styled from 'styled-components';

const Text = styled.input`
  width: calc(100% - 100px);
  padding: 6px;
  color: blueviolet;
`;

const Btn = styled.button`
    width: 84px;
    padding: 6px;
`;

class Control extends Component {
    state = {
        item: {
            title: ''
        }
    }

    componentWillReceiveProps(props) {
        if (props.item) {
            this.setState({
                item: { ...props.item }
            });
        }
    }

    OnChangeText = (e) => {
        this.setState(
            {
                item: {
                    ...this.state.item,
                    title: e.target.value
                }
            }
        );
    }

    OnSumbitForm = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state.item);
        this.setState({
            item: {
                title: ''
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.OnSumbitForm}>
                <Text
                    type="text"
                    onChange={this.OnChangeText}
                    value={this.state.item.title}
                />
                <Btn
                    disabled={!this.state.item.title}
                >
                    Save
                </Btn>
            </form>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        item: state.todos.item
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Control);

import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 5px 0 5px -40px;
  background: transparent;
  color: blueviolet;
  border: 1px solid blueviolet;
  list-style: none;
`;

const Btn = styled.button`
  float: right
`;

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }

    onDeleteHandler = (e) => {
        e.preventDefault();
        this.props.onItemDelete(e, this.props.item);
    }

    onEditHandler = (e) => {
        e.preventDefault();
        this.props.onItemEdit(e, this.props.item);
    }

    render() {
        let { title } = this.props.item;
        return (
            <Li>
                {title}
                <Btn
                    onClick={this.onDeleteHandler}
                >
                    Delete
                </Btn>
                <Btn
                    onClick={this.onEditHandler}
                >
                    Edit
                </Btn>
            </Li>
        );
    }
}

export default Item;

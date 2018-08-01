import React, { Component } from 'react';
import styled from 'styled-components';
const LoaderContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  text-align: center;
  width: 100%;
  color: blueviolet;
`;
class Loader extends Component {
    render() {
        return (
            <LoaderContainer>
                {this.props.loading && <i>loading...</i>}
            </LoaderContainer>
        )
    }
}

export default Loader;

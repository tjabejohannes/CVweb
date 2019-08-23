import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const StyledCard = styled.div`
    background: #f0f0f0;
    text-align: center;

    border-radius: 2px;
    margin: 1%;
    width: 98%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    z-index: 0;
    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`
const StyledLargeCard = styled(StyledCard)`
    width: 48%;
`

const StyledBackground = styled.div`
    width:100%;
    height:auto;
    z-index: -1;
    position: sticky;
    text-align:left;

    img{
        width:100%;
        height:auto;
        position: absolute;
        
    }
`

class Card extends Component {
    state = {}
    render() {

        if (this.props.type === "large") {
            return (
                <StyledCard >
                    <StyledBackground>
                        <img src="http://localhost:3000/ProfileBackground2.svg" alt="something" />
                    </StyledBackground>
                    <div className={this.props.type}>
                        {this.props.children}
                    </div>
                </StyledCard>);
        } else {
            return <StyledLargeCard >
                <div className={this.props.type}>
                    {this.props.children}
                </div>
            </StyledLargeCard>;
        }
    }
}

export default Card;
import React, { Component } from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    background: #f0f0f0;
    text-align: center;
    border-radius: 2px;
    margin: 10px;
    width: 48%;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    z-index: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    @media (max-width: 1200px) {
        width: 98%;
    }
`

const StyledLargeCard = styled(StyledCard)`
    width: 98%;
    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`
const StyledLargeCardNoHover = styled(StyledCard)`
    width: 98%;
`


class Card extends Component {
    state = {}
    render() {

        if (this.props.size === "large") {
            return (
                this.props.type === "noHover" ?
                    <StyledLargeCardNoHover >
                        <div className={this.props.type}>
                            {this.props.children}
                        </div>
                    </StyledLargeCardNoHover> :
                    <StyledLargeCard >
                        <div className={this.props.type}>
                            {this.props.children}
                        </div>
                    </StyledLargeCard>
            )
        } else {
            return (
                <StyledCard >
                    <div className={this.props.type}>
                        {this.props.children}
                    </div>
                </StyledCard>)
        }
    }
}

export default Card;
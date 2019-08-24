import React, { Component } from 'react';
import styled from 'styled-components';


const StyledBaseInformation = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    


    .information{
        display: flex;
        flex-direction: column;
        margin-top:7%;
        width:70%;
    }

    .profileImageContainer{
        width:20%;
    }
    .profileImageContainer img{
        margin:10%;
        width:70%;
        height:auto;
        border-radius: 50%;
    }
`


class BaseInformation extends Component {
    render() {
        return (
            <StyledBaseInformation>
                <div className="information">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="profileImageContainer">
                    <img alt="profile" src={this.props.img} />
                </div>
            </StyledBaseInformation>
        );
    }
}

export default BaseInformation;
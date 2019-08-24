import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDetailedInformation = styled.div`
    display: flex;
    width: 100%;
    height:300px;

    .title{
        width: 30%;
        font-size:30px;
        background-image: linear-gradient(to right, #f0f0f0 , #eaeaea);
        font-weight: bold;
    }

    .details{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width:70%;
        margin-left:2%;
        text-align: left;
    }

    .detail {
        padding-left:2%;
        &:hover{
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
            background-color: rgba(0, 0, 0, 0.1);
        }
        color: #000;
        margin-top: 2%;
        width:44%;
        margin-right:2%;
    }
`

class DetailedInformation extends Component {
    render() {
        return (
            <StyledDetailedInformation>
                <div className="title">
                    Hobbies
                </div>
                <div className="details">
                    <div className="detail">
                        Biking
                    </div>
                    <div className="detail">
                        Boxing
                    </div>
                    <div className="detail">
                        Snowboarding
                    </div>
                    <div className="detail">
                        Biking
                    </div>
                    <div className="detail">
                        Boxing
                    </div>
                    <div className="detail">
                        Snowboarding
                    </div>
                    <div className="detail">
                        Biking
                    </div>
                    <div className="detail">
                        Boxing
                    </div>
                    <div className="detail">
                        Snowboarding
                    </div>
                    <div className="detail">
                        Biking
                    </div>
                    <div className="detail">
                        Boxing
                    </div>
                    <div className="detail">
                        Snowboarding
                    </div>
                </div>
            </StyledDetailedInformation>
        )
    }
}

export default DetailedInformation;
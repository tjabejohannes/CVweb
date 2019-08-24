import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDetailedInformation = styled.div`
    display: flex;
    width: 100%;
    height:200px;

    .information{
        background-image: linear-gradient(to right, #f0f0f0 , #eaeaea);
        padding: 10px;
    }

    .information h1{
        font-size:20px;
        font-weight: bold;
    }

    .description{
        font-size:10px;
        color: #959595;
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
                <div className="information">
                    <h1>{this.props.title}</h1>
                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
                <div className="details">
                    {this.props.details.map((element, i) => {
                        return(
                        <div className="detail" key={i}>
                            {element}
                        </div>)
                    })}
                </div>
            </StyledDetailedInformation>
        )
    }
}

export default DetailedInformation;
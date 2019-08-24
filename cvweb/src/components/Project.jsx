import React, { Component } from 'react';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';



const StyledProject = styled.div`
    
    width:100%;
    text-align: left;
    display: flex;
    cursor: pointer;

    .information{
        width:80%;
        display: flex;
        flex-direction: column;
    }
    .title{
        margin-bottom: 5px;
        background-image: linear-gradient(to right, #eaeaea , #f0f0f0);
        border-radius:2px;
    }

    .Description{
        margin-left: 10px;
        color: #959595;;
    }

    .badges{
        height: 80%;
        margin:1%;
    }
    .badge{
        margin-block-end:2%;
    }
    h1{
        font-size: 20px;
        margin-block-start:2%;
        margin-left: 15px;
    }
    img{
        width: 20%;
        height:auto;
        margin-left: 10%;
        margin: 10px;
        border-radius: 3%;
    }
`

class Project extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        window.location.replace(this.props.link);
    }
    render() {
        return (
            <StyledProject onClick={this.handleClick}>
                <div className="information" >
                    <div className="title">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="Description">
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className="badges">
                        {this.props.badges.map((element, i) => {
                            return (
                                <div className="badge" key={i}>
                                    <Chip label={element} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img src={this.props.image} alt="preview" />
            </StyledProject>
        );
    }
}

export default Project;
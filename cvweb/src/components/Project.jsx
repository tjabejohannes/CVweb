import React, { Component } from 'react';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';



const StyledProject = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:100px;
    text-align: left;

    .title{
        height: 50%;
        background-image: linear-gradient(to right, #eaeaea , #f0f0f0);
        border-radius:2px;
    }

    .badges{
        height: 50%;
        margin:1%;
    }
    .badge{
        margin-block-end:2%;
    }
    h1{
        font-size: 20px;
        margin-block-start:2%;
        margin-left:2%;
    }
`

class Project extends Component {

    render() {
        return (
            <StyledProject>
                <div className="title">
                    <h1>{this.props.name}</h1>
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
            </StyledProject>
        );
    }
}

export default Project;
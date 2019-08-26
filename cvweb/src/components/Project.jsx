import React, { Component } from 'react';
import styled from 'styled-components';
import { Chip, Avatar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';



const StyledProject = styled.div`
    
    width:100%;
    text-align: left;
    display: flex;
    align-items: center;
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
    .title h1{
        font-size: 20px;
        margin-block-start:10px;
        margin-left: 15px;
        font-weight: bold;
    }

    .description{
        color: #000;
    }

    .description h1{
        font-size: 15px;
        color: #959595;
        
    }

    .projectInfoContainer{
        display: flex;
        justify-content: space-between;
        margin-left: 15px;
        padding:10px;
    }

    .badges{
        height: 80%;
        margin:1%;
    }
    .badges h1{
        font-size: 15px;
        color: #959595;
    }
    .badge{
        margin-block-end:2%;
    }

    .chipsTweaks{
        background-color:  #fff;
        color: #000;
    }
    .avatarTweaks{
        background-color:  #fff;
        padding: 5%;
    }

    .technology{
        max-width: 60%;
        min-width: 20%;
    }

    .contributors{
        margin-left: 15px;
        padding:10px;
    }

    .imageContainer{
        height:100%;
        margin-right: 3%;
    }
    .crop {
        overflow: hidden;
        width: 200px;
        height: 200px;
        border-radius: 3%;
        vertical-align: middle;
    }
    .crop img {
        object-fit: cover;
        object-position: 50% 50%;
        width: 200px;
        height: 200px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        .imageContainer{
            margin-right: 0%;
            margin-bottom: 3%;
        }
        .information{
            width: 100%;
        }
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
                    <div className="projectInfoContainer">
                        <div className="description">
                            <h1>
                                Description:
                                </h1>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                        <div className="badges technology">
                            <h1>
                                Technology:
                                </h1>
                            {this.props.stack.map((element, i) => {
                                return (
                                    <div className="badge" key={i}>
                                        <Chip label={element.name} color="secondary" avatar={<Avatar alt={element.name} src={"https://icongr.am/devicon/" + element.icon + ".svg?size=300"} className="avatarTweaks" />} className="chipsTweaks" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="badges contributors">
                        <h1>
                            Contributors:
                            </h1>
                        {this.props.contributor.map((element, i) => {
                            return (
                                <div className="badge" key={i}>
                                    <Chip icon={<FaceIcon />} label={element} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="imageContainer">
                    <div className="crop">
                        <img src={process.env.PUBLIC_URL+this.props.image} alt="preview" />
                    </div>
                </div>
            </StyledProject>
        );
    }
}

export default Project;
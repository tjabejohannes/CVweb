import React, { Component } from 'react';
import styled from 'styled-components';
import { Chip, Avatar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { withStyles } from '@material-ui/styles';

const homePath = process.env.PUBLIC_URL;

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

    .technology{
        max-width: 60%;
        min-width: 20%;
        margin-left: 5%;
        margin-right: 5%;
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

const StyledChip = withStyles({
    root: {
        background:  '#fff',
        color: '#000',
    },
    
})(Chip);


const StyledAvatar = withStyles({
    root: {
        background:  "#fff",
        padding: "5%",
        width: "30px",
        height: "30px"
    }
    
})(Avatar);

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
                                        <StyledChip 
                                            label={element.name} 
                                            avatar={<StyledAvatar alt={element.name} src={"https://icongr.am/devicon/" + element.icon + ".svg?size=300"} />} 
                                            />
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
                        {console.log("" + homePath)}

                        <img src={homePath + this.props.image} alt="preview" />
                    </div>
                </div>
            </StyledProject>
        );
    }
}

export default Project;
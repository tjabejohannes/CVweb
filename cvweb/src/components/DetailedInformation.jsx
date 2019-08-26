import React, { Component } from 'react';
import styled from 'styled-components';
import { Chip, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const StyledDetailedInformation = styled.div`
    display: flex;
    width: 100%;
    align-items: stretch;
    max-height: 250px;

    .information{
        background-image: linear-gradient(to bottom, #eaeaea,rgba(255,0,0,0));
        padding: 10px;
        width: 30%;
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
        text-align: left;
        padding-top:5%;
        padding-bottom:5%;
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
                        return (
                            <div className="badge" key={i}>
                                <StyledChip 
                                    label={element.name} 
                                    avatar={<StyledAvatar 
                                                        alt={element.name} 
                                                        src={"https://icongr.am/devicon/" + element.icon + ".svg?size=300"} />} />
                            </div>
                        )
                    })}
                </div>
            </StyledDetailedInformation>
        )
    }
}

export default DetailedInformation;
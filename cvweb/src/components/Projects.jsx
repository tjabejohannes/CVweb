import React, { Component } from 'react';

import Card from './Card';
import Project from './Project';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
`

class Projects extends Component {
    state = {
        projects: [
            {
                name: "ClipPost",
                link: "https://github.com/tjabejohannes/ClipPost",
                description: "Blavlalsd aksj dlaksd lkaslkdj alksdlk ja lks dlasjdghakd",
                badges: ['Electron', 'NodeJS', 'JavaScript'],
                image: "https://raw.githubusercontent.com/tjabejohannes/velectron/master/front/Example%23.png"
            },
            {
                name: "P5",
                link: "http://tjabejv.nvg.org/",
                description: "P5js is JavaScript's answer to the Processing graphical library. Both are OpenSource.",
                badges: ['p5.js', 'JavaScript'],
                image: "http://localhost:3000/P5js.png"
            }
        ]
    }

    render() {
        return (
            <StyledCardContainer>
                {this.state.projects.map((element, i) => {
                    return(
                    <Card key={i} type="large">
                        <Project
                            name={element.name}
                            link={element.link}
                            description={element.description}
                            badges={element.badges}
                            image={element.image} />
                    </Card>)
                })};
            </StyledCardContainer>);
    }
}

export default Projects;

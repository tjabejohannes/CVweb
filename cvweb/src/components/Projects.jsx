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
    render() {
        return (
            <StyledCardContainer>
                <Card>
                    <Project name="ClipPost" github="https://github.com/tjabejohannes/ClipPost" badges={['Electron', 'NodeJS', 'JavaScript']} />
                </Card>
                <Card>
                    <Project name="P5" github="https://github.com/tjabejohannes/mySite" badges={['p5.js', 'JavaScript']} />
                </Card>
            </StyledCardContainer>);
    }
}

export default Projects;

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
                description: "ClipPost is a application that makes using the clipboard on your computer as efficient as possible.",
                stack: [{ name: 'Electron', icon: "electron-original" }, { name: 'Javascript', icon: "javascript-plain" }],
                image: "https://raw.githubusercontent.com/tjabejohannes/velectron/master/front/Example%23.png",
                contributor: ['Tjabe Johannes van Lessen', 'Tor Skuggevik'],
            },
            {
                name: "P5",
                link: "http://tjabejv.nvg.org/",
                description: "P5js is JavaScript's answer to the Processing graphical library. Both are OpenSource.",
                stack: [{ name: 'Javascript', icon: "javascript-plain" }, { name: 'P5js', icon: "javascript-plain" },],
                image: "http://localhost:3000/P5js.png",
                contributor: ['Tjabe Johannes van Lessen'],
            },
            {
                name: "BotB",
                link: "https://github.com/battleofthebases/game",
                description: "TDT4240: Software Architecture Project. The task was to create a Android Game, with focus on good architecture.",
                stack: [{ name: 'Java', icon: "java-plain" }, { name: 'Android', icon: "android-plain" }, { name: 'NodeJS', icon: "nodejs-plain" }, { name: "AWS", icon: "amazonwebservices-plain-wordmark" }],
                image: "http://localhost:3000/BotB.jpg",
                contributor: ['Christian Nyvoll', 'Edvard Bakken', 'Håvard Aasmo', 'Tor Skuggevik', 'Tjabe Johannes van Lessen'],
            },
            {
                name: "Experter i team",
                link: "https://github.com/OlavH96/EIT",
                description: "TDT4856: Eksperter i team.",
                stack: [{ name: 'Java', icon: "java-plain" }, { name: 'Android', icon: "android-plain" }, { name: 'NodeJS', icon: "nodejs-plain" }],
                image: "http://localhost:3000/EIT.png",
                contributor: ['Anders Ulfsnes', 'Espen Marinius Hansen', 'Olav Reppe Husby', 'Michael Skibeli Mullins', 'Tjabe Johannes van Lessen', 'Torstein Molland'],
            }
        ]
    }

    render() {
        return (
            <StyledCardContainer>
                {this.state.projects.map((element, i) => {
                    return (
                        <Card key={i} size="large">
                            <Project
                                name={element.name}
                                link={element.link}
                                description={element.description}
                                stack={element.stack}
                                image={element.image}
                                contributor={element.contributor} />
                        </Card>)
                })}
            </StyledCardContainer>);
    }
}

export default Projects;

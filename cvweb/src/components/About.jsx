import React, { Component } from 'react';
import Card from './Card';
import BaseInformation from './BaseInformation';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;
`

class About extends Component {
    state = {
        name: "Tjabe Johannes van Lessen",
        birthday: "05.12.96"
    }
    render() {
        return (
            <StyledCardContainer>
                <Card type="large">
                    <BaseInformation name={this.state.name} tlf={this.state.tlf}></BaseInformation>
                </Card>
                <Card>
                    <h2>{this.state.name}</h2>
                    <h3>{this.state.birthday}</h3>
                </Card>
                <Card>
                    <h2>{this.state.name}</h2>
                    <h3>{this.state.birthday}</h3>
                </Card>
                <Card>
                    <h2>{this.state.name}</h2>
                    <h3>{this.state.birthday}</h3>
                </Card>
                <Card>
                    <h2>jkdsjadjflkjasldjfalkjs</h2>
                    <h3>{this.state.birthday}</h3>
                </Card>
            </StyledCardContainer>
        );
    }
}

export default About;
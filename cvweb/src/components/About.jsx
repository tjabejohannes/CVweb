import React, { Component } from 'react';
import Card from './Card';
import BaseInformation from './BaseInformation';
import DetailedInformation from './DetailedInformation';
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
                <Card type="large" styledBackground >
                    <BaseInformation name={this.state.name} tlf={this.state.tlf} img="https://scontent-arn2-1.cdninstagram.com/vp/f2675ce4947d4a7d0133287212f84a9f/5DEFA134/t51.2885-19/s320x320/32430479_371055023406210_3021052246222700544_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"></BaseInformation>
                </Card>
                <Card>
                    <DetailedInformation>
                        
                    </DetailedInformation>
                </Card>
                <Card>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                </Card>
                <Card>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                </Card>
                <Card>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                    <h2>              .      </h2>
                </Card>
            </StyledCardContainer>
        );
    }
}

export default About;
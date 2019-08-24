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
        birthday: "05.12.96",
        detailedCards: [
            {
                title: "Technology",
                details: [{name:'Android', icon:"android-plain"}, {name:'NodeJS', icon:"nodejs-plain"},{name:'HTML',icon:'html5-plain'},{name:'Git',icon:'git-plain'},{name:'CSS',icon:'css3-plain'},{name:'Electron',icon:"electron-original"},{name:'Mysql',icon:'mysql-plain'}],
                description: "Comfortable development technologies",
            },
            {
                title: "Languages",
                details: [{name:'Java', icon:"java-plain"}, {name:'JavaScript', icon:"javascript-plain"}, {name:'Python', icon:"python-plain"},],
                description: "Comfortable development languages",
            },
            {
                title: "Software",
                details: [{name:'Photoshop', icon:"photoshop-line"}, {name:'Visualstudio',icon:'visualstudio-plain'},{name:'Gitlab',icon:'gitlab-plain'},{name:'React',icon:'react-original'},{name:'CSS',icon:'css3-plain'},{name:'Electron',icon:"electron-original"},{name:'Mysql',icon:'mysql-plain'}],
                description: "Software used weekly",
            },
        ]
    }
    render() {
        return (
            <StyledCardContainer>
                <Card size="large" type="noHover" >
                    <BaseInformation name={this.state.name} tlf={this.state.tlf} profileImage="http://localhost:3000/ProfileBackgroundArt.png" img="https://scontent-arn2-1.cdninstagram.com/vp/f2675ce4947d4a7d0133287212f84a9f/5DEFA134/t51.2885-19/s320x320/32430479_371055023406210_3021052246222700544_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com"></BaseInformation>
                </Card>
                {this.state.detailedCards.map((card, i) => {
                    return (
                        <Card key={i}>
                            <DetailedInformation title={card.title} description={card.description} details={card.details}>

                            </DetailedInformation>
                        </Card>)
                })};
            </StyledCardContainer>
        );
    }
}

export default About;
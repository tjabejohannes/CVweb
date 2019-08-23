import React, { Component } from 'react';
import styled from 'styled-components';


const StyledBaseInformation = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%;

    .information{
        display: flex;
        flex-direction: column;
        margin-top:10%;
        width:70%;
    }

    .image{
        width:30%;
    }
    img{
        margin:10%;
        width:70%;
        height:auto;
        border-radius: 50%;
    }
`

class BaseInformation extends Component {
    render() {
        return (
            <StyledBaseInformation>
                <div className="information">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="image">
                    <img alt="profile" src="https://scontent-arn2-1.cdninstagram.com/vp/f2675ce4947d4a7d0133287212f84a9f/5DEFA134/t51.2885-19/s320x320/32430479_371055023406210_3021052246222700544_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com" />
                </div>
            </StyledBaseInformation>
        );
    }
}

export default BaseInformation;
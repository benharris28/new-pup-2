import React from 'react'
import YouTube from 'react-youtube';

class PrepareHome extends React.Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    render() {
        const opts = {
           
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        
          return(
            <div>
                <h4>Step 1: Prepare your home</h4>
                <div>
                    Task Overview
                    <ul>
                        <li>Clean up any items that can be chewed or swallowed</li>
                        <li>Choose your crate location</li>
                        <li>Set up your crate</li>

                    </ul>
                </div>
                <div>
                    <h5>Hide any items that can be chewed</h5>
                </div>
                <div>
                    <h4>Set up your crate</h4>
                    <p>Choose the location of your crate. Will your puppy be sleeping in your bedroom or in another room?</p>
                    <h5>Watch this video on how to set your crate</h5>
                    <div>
                        <YouTube videoId="n6MHdWFnU7E" opts={opts} onReady={this._onReady} />
                    </div>
                    <p>Place a blanket over the crate, leaving only the front uncovered </p>
                    <img className="page-image" src="https://www.rover.com/blog/wp-content/uploads/2020/01/61d4qnb48GL.jpg" alt="crate cover" />
                </div>
            </div>
        )
    }
}

export default PrepareHome
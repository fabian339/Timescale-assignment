import React, { Component } from 'react';
import heroBackground from '../../images/hero-background.jpg';
import headshot from '../../images/headshot.jpg';

export default class About extends Component {
    render(){
        return (
            <div className="about-container">
                <div id="background-img">
                    <img src={heroBackground} width="100%" height="550" alt="background"/>
                </div>
                <div className="info-container">
                    <div id="my-img-container">
                        <img id="my-img" src={headshot} alt="background"/>
                    </div>
                    <div id="my-info">
                        <h1>A little about me</h1>
                        <p>
                            Abraham Lincoln (/ˈlɪŋkən/;[2] February 12, 1809 – April 15, 1865) was an American statesman and 
                            lawyer who served as the 16th president of the United States from 1861 to 1865. Lincoln led the 
                            nation through the American Civil War, the country's greatest moral, constitutional, and political 
                            crisis. He succeeded in preserving the Union, abolishing slavery, bolstering the federal government, 
                            and modernizing the U.S. economy.
                        </p>
                        <p>
                            Abraham Lincoln (/ˈlɪŋkən/;[2] February 12, 1809 – April 15, 1865) was an American statesman and 
                            lawyer who served as the 16th president of the United States from 1861 to 1865. Lincoln led the 
                            nation through the American Civil War, the country's greatest moral, constitutional, and political 
                            crisis. He succeeded in preserving the Union, abolishing slavery, bolstering the federal government, 
                            and modernizing the U.S. economy.
                        </p>
                        <p>
                            Abraham Lincoln (/ˈlɪŋkən/;[2] February 12, 1809 – April 15, 1865) was an American statesman and 
                            lawyer who served as the 16th president of the United States from 1861 to 1865. Lincoln led the 
                            nation through the American Civil War, the country's greatest moral, constitutional, and political 
                            crisis. He succeeded in preserving the Union, abolishing slavery, bolstering the federal government, 
                            and modernizing the U.S. economy.
                        </p>
                        <p>
                            Abraham Lincoln (/ˈlɪŋkən/;[2] February 12, 1809 – April 15, 1865) was an American statesman and 
                            lawyer who served as the 16th president of the United States from 1861 to 1865. Lincoln led the 
                            nation through the American Civil War, the country's greatest moral, constitutional, and political 
                            crisis. He succeeded in preserving the Union, abolishing slavery, bolstering the federal government, 
                            and modernizing the U.S. economy.
                        </p>
                        
                    </div>

                </div>
                
            </div>
        );
    }
}

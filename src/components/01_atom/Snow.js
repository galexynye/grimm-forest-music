import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme';
import Snowflake from '../../assets/GrimmGraphics/snowflake_100x100.png'



let SnowCanvas = styled.div`
canvas {
display: block;
position: fixed;
z-index: -1;
}
${msTheme.mediaquery().medium}{
display: none;
}
`

const SnowflakeWrapper = styled.div`
  position: absolute; 
  top: 0;
  right: 0;
  img{
    padding: 25px;
    max-width: 40px;
  }
  ${msTheme.mediaquery().medium}{
    display: none;
  }
`



export class Snow extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            snowing: this.props.snowing
        }
    }

    snowToggle = () => {
        this.setState({ snowing: !this.state.snowing })
    }


    componentDidMount() {

        var canvas = document.querySelector('.snow'),
            ctx = canvas.getContext('2d'),
            windowW = window.innerWidth,
            windowH = window.innerHeight,
            numFlakes = 50, flakes;

        flakes = [];

        canvas.width = window.innerWidth


        function Flake(x, y) {
            var maxWeight = 1,
                maxSpeed = 2;

            this.x = x;
            this.y = y;
            this.r = randomBetween(0, 1);
            this.a = randomBetween(0, Math.PI);
            this.aStep = 0.01;


            this.weight = randomBetween(1, maxWeight);
            this.alpha = (this.weight / maxWeight);
            this.speed = (this.weight / maxWeight) * maxSpeed;

            this.update = function () {
                this.x += Math.cos(this.a) * this.r;
                this.a += this.aStep;

                this.y += this.speed;
            }

        }


        function init(resize) {
            var i = numFlakes,
                flake,
                x,
                y;

            while (i--) {
                x = randomBetween(0, windowW, true);
                y = randomBetween(0, windowH, true);


                flake = new Flake(x, y);
                flakes.push(flake);
            }

            scaleCanvas();
            if (!resize) {
                loop();
            }

        }

        function scaleCanvas() {
            canvas.width = windowW;
            canvas.height = windowH;
        }





        function loop() {
            var i = flakes.length, flakeA


            // clear canvas
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, windowW, windowH);
            ctx.restore();

            // loop of hell
            while (i--) {

                flakeA = flakes[i];
                flakeA.update();

                ctx.beginPath();
                ctx.arc(flakeA.x, flakeA.y, flakeA.weight, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(255, 255, 255, ' + flakeA.alpha + ')';
                ctx.fill();

                if (flakeA.y >= windowH) {
                    flakeA.y = -flakeA.weight;
                }

            }

            requestAnimationFrame(loop);
        }

        // function stop() {
        // flakes = []
        // ctx.clearRect(0, 0, windowW, windowH);
        // }




        function randomBetween(min, max, round) {
            var num = Math.random() * (max - min + 1) + min;

            if (round) {
                return Math.floor(num);
            } else {
                return num;
            }
        }



        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            windowW = window.innerWidth;
            windowH = window.innerHeight;
            flakes = []
            init(true);
        })



        init();

    }

    componentWillUnmount() {
        window.removeEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            windowW = window.innerWidth;
            windowH = window.innerHeight;
            flakes = []
            init(true);
        })



    }
    render() {
        return (
            <div>
                <SnowCanvas>
                    <SnowflakeWrapper onClick={this.snowToggle}>
                        <img src={Snowflake} />
                    </SnowflakeWrapper>
                    <canvas className="snow"></canvas>
                </SnowCanvas>
            </div>
        )
    }
}
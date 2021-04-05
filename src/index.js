import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import playerService from "./playerService";
import Result from "./components/Result";
import PlayAgain from "./components/PlayAgain";

class HigherLower extends Component {
    state = {
        playerBank: [],
        question: "",
        question_key: "",
        answer: "",
        score: 0,
        incorrect: 0,
        correct_index: 0,
        incorrect_index: 0
    }
    getPlayers = () => {
        playerService().then(player => {
            this.setState({
                playerBank: player
            });
        });
    };

    getQuestion = () => {
        const stats = ["the higher career batting avg", "more career home runs", "more career RBIs", "more career WAR"];
        const stats_key = ["avg", "hrs", "rbi", "war"]
        
        const random = Math.floor(Math.random() * stats.length);
        
        this.setState({
            question: stats[random],
            question_key: stats_key[random]
        });
    };

    checkAnswer = (answer) => {
        const p1_stat =  parseFloat(this.state.playerBank[0][this.state.question_key])
        const p2_stat = parseFloat(this.state.playerBank[1][this.state.question_key])

        if (p1_stat > p2_stat) {
            var correct_ans = this.state.playerBank[0]["name"];
            this.setState({
                correct_index: 0,
                incorrect_index: 1
            })
        } else { // no equals lol
            var correct_ans = this.state.playerBank[1]["name"];
            this.setState({
                correct_index: 1,
                incorrect_index: 0
            })
        };

        if (correct_ans === answer["name"]) {
            this.setState({
                score: this.state.score + 1
            })
            // refreshes the players and question
            this.getPlayers();
            this.getQuestion();
        } else {
            // re-renders on state change, so incorrect pops up at bottom
            this.setState({
                incorrect: 1
            })
        };
        
    }

    playAgain = () => {
        this.getPlayers();
        this.getQuestion();
        this.setState({
            score: 0,
            incorrect: 0
        })
    }

    componentDidMount() {
        this.getPlayers();
        this.getQuestion();
    }
    
    render () {
        return (
            <div className="container">
                {/* {this.state.incorrect === 0 &&  */}
                    <div className="title">Who has {this.state.question}?</div>
                {/* }  */}
                
                {this.state.incorrect === 0 && 
                // this.state.playerBank.length > 0 && 
                this.state.playerBank.map(
                    ({name, img}) => 
                        <div className="panel" onClick={() => {this.checkAnswer({name})}}>
                            <img src={img} alt="img" width="300px" class="center"></img>
                            <div className="name">{name}</div>
                        </div>
                )}
                {this.state.incorrect === 0 && 
                    <div className="points">Current score: {this.state.score}</div>
                }
                {this.state.incorrect === 0 && 
                    <div className="footer">Updated April 4th, 2021.</div>
                }
                {this.state.incorrect === 1 ? (
                    <Result 
                        img_link={this.state.playerBank[this.state.correct_index]["img"]} 
                        name={this.state.playerBank[this.state.correct_index]["name"]}
                        answer={this.state.playerBank[this.state.correct_index][this.state.question_key]}
                        wrong_answer={this.state.playerBank[this.state.incorrect_index][this.state.question_key]}
                        wrong_name={this.state.playerBank[this.state.incorrect_index]["name"]}
                    />
                ): null}
                {this.state.incorrect === 1 ? (
                    <PlayAgain score={this.state.score} playAgain={this.playAgain}/>
                ): null}
            </div>
        );
    }
}

ReactDOM.render(<HigherLower />, document.getElementById("root"));
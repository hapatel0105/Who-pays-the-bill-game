import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        stage:1,
        players:[],
        result:''
    }

    addPlayer = (name) => {
        this.setState((prevState)=>({
            players:[
                ...prevState.players,
                name
            ]
        }))
    }

    removePlayer = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx,1);
        this.setState({players:newArray});
    }

    nextPage = () => {
        const { players } = this.state
        if(players.length < 2){
            toast.error("You need nore than one player",{
                position: "top-left",
                autoClose:2000
            })
        }else{
            this.setState({
                stage:2
            },()=>{
                setTimeout(()=>{
                    this.generateLooser()
                },2000)
            })
        }
    }
    generateLooser = () => {
        const { players } = this.state;
        this.setState({
            result: players[Math.floor(Math.random() * players.length)]
        })
    }
    resetGame = () => {
        this.setState({
            stage:1,
            players:[],
            result:''
        })
    }
    render(){
        return(
            <>
            <MyContext.Provider value={{
                state: this.state,
                addPlayers: this.addPlayer,
                removePlayers: this.removePlayer,
                next: this.nextPage,
                getNewLooser: this.generateLooser,
                resetGameAgain: this.resetGame
            }}>
                {this.props.children}
            </MyContext.Provider>
            <ToastContainer/>
            </>
            
        )
    }
}

export {
    MyContext,
    MyProvider
}
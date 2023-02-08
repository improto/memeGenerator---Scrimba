import React from "react"
import MemeData from "../Components/memeData"

export default function Meme(){

    //Done without State

    //let url
    // function getMemeImage(){
    //     const memeArray = MemeData.data.memes   //create meme array
    //     const randMeme = Math.floor(Math.random() * memeArray.length)   //generate random memeid
    //     url = memeArray[randMeme].url  //get url from the instance with object url
    //     console.log(url)
    // }

    //With State
    const [memeImage, setMemeImage] = React.useState("")


    function getMemeImage(){
        const memeArray = MemeData.data.memes   //create meme array
        const randMeme = Math.floor(Math.random() * memeArray.length)       //generate random memeid

        setMemeImage(memeArray[randMeme].url)
    }

    return(
        <section className="meme-main">
            <div className="meme-text">
                <input 
                    type="text" 
                    className="form-data" 
                    placeholder="Top Text"
                />
                <input 
                    type="text" 
                    className="form-data" 
                    placeholder="Bottom Text"
                />
            </div>
            <button className="meme-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            <img src={memeImage} alt="" className="meme-image"/>
        </section>
    )
}
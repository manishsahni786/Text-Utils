import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
}
const handleLowClick = ()=>{
    //console.log("Lowercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
}
const handleClearClick = ()=>{
    let newText='';  
    setText(newText);
}
const handleCopy = ()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); 
}
const removeExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "))  
}
// reversed the text
const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
  };
  //This function converts the first letter of every word to uppercase the rest of letters are lower case
  const captialize = ()=>{
    let words = text.split(" ");
    let joinedWords = [];
    let capWord;
    
    words.forEach(function (element){
        if(element[0] !== undefined){
            capWord = element[0].toUpperCase() + element.slice(1).toLowerCase();
            joinedWords += capWord + ' '; 
        }
    })
    setText(joinedWords);
}

// Function to count Vowels:
const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    }
    // console.log("No. of Vowels are: " + countChar);
  };

 // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
};
     //Function for camelCase text:
    const handlecamelCaseonClick = () => {
    let camelCaseText = text
        .split(' ')
        .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0)
            .toUpperCase() + word.slice(1)
            .toLowerCase();
        })
        .join(' ');
    setText(camelCaseText);
    }
    //This converts text to sentence case meaning the first word starts with a captial letter the rest of the words are lowercase
const handleSentenceCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join("");

    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}

//Function for inverse text
 const inversed=(event) =>{
      let currentValue =text.split("").reverse("").join("");
      setText(currentValue)
     }

const handleOnChange = (event)=>{
        // console.log("On change");   
        console.log(props.mode)
        setText(event.target.value)
}
const [text, setText] = useState("");
let [count, setCount] = useState(0);
let [count1, setCount1] = useState(0);
let countChar = 0,
countCons = 0;

return (
<div className='container' style={{color: props.mode==='light'?'black':'white'}}>
    <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">  
    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#0c418f',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
    </div>  
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={reversed}>Reverse Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={inversed}>Inverse Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={captialize}>Captialize</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleVoClick}>Count no. of Vowels</button>
    <button className="btn btn-primary mx-1 my-3" onClick={handleCoClick}>Count no. of Consonants </button>
    <button className="btn btn-primary mx-1 my-1" onClick={handlecamelCaseonClick}>CamelCaseText</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleSentenceCaseClick}>Handle Sentence</button>
    
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview!  "}</p>  
       <h3>You have entered:</h3>
       <p>{count} No. of Vowels</p>
       <p>{count1} No. of Consonants</p>
    </div>
</div>

  )
}

import React from 'react'

export default function About(props) {

// const[myStyle, setMyStyle]= useState( 
//     {
//     color: 'black',
//     backgroundColor:'white'
//     }
// )
// const [btntext, setBtntext]= useState("Enable Dark Mode")
// const toogleStyle= ()=>{
//     if(myStyle.color==='black')
//     {
//         setMyStyle({
//             color: 'white', 
//             backgroundColor:'black',
//             border: '1px solid white'
//             })
//             setBtntext("Enable Light Mode");
//     }
//     else{
//         setMyStyle({
//             color: 'black',
//             backgroundColor:'white'
//             })
//             setBtntext("Enable Dark Mode");
//     }
// }
let myStyle = {
    color: props.mode === 'dark'?'white':'#103060',
    backgroundColor: props.mode === 'dark'?'#103060':'white'
}
   
  return (
        <div className= "container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
               <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                 Textutils gives you a way to analyze your text quickly and efficiently.Be it word count, character count or
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                Textutils is a free character counter tool that provides instant character count and word count statistics for
                a given text. Textutils reports a number of words and characters. Thus it suitable for writing text word/ character 
                limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatiable</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This word counter software works in any browsers such as Chrome, Firefox, Internet Explorer, safari,
                opera. It suits to count character in facebook, blog, books, excel docoument, pdf docoument, essays etc.
                </div>
                </div>
            </div> 
            </div>
           
      </div>
  )
}

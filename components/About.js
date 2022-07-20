const About = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Hey!!<br/><b> I'm Renuka </b></h1>
                <div className="wrapper">
    {/*<div className="fixed-txt">I'm a</div>*/}
                  <ul className="moving-text">
                   <li><span>A Web Developer...</span></li>
                   <li><span>A Designer...</span></li>
                   <li><span>An Art Lover...</span></li>
                   <li><span>A Creative thinker...</span></li>
                  
                  </ul>
                
                </div>
            
        
            </div>
            <div className="right">
            <img className="aboutimg" src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-4348.jpg?t=st=1653925165~exp=1653925765~hmac=0009beca5cb41963b860f69f6a8b64f721c96cf9f153b95d19b342aa76dc9f3a&w=740"/> 
            </div>
            
             
        </div>
    )
}
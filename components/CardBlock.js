const CardBlock = () => {
    // const arr = [true, true];
    return (
            // <div>
            //    arr.map((singledata, idx)=>{
            //     return(
            //         <Card
            //             title='Geek Gallary'
            //             imageUrl='https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?t=st=1653274052~exp=1653274652~hmac=f4870b03aebc1534f4f618743bded7cc58f498bfe4b481ee779569f5af11a62e&w=1060'
            //             body='Geek Gallary is a website dedicated to sharing stock photography. Which uses the Unsplash API for images. we can search the images by their name and we can also get that image in another model when we click'
            //         />
            //     )
                    
            //     )
                

            //    })
            // </div>

        <div >
            <h1 className="H1">My Projects</h1>
         
            <table>
                <tr>
                    <td className="card-gap">
                        <Card
                            title='Geek Gallary'
                            imageUrl='g1.jpg'
                            body='Geek Gallary is a website dedicated to stock photography. Which uses the Unsplash API for images. we can search the images by their name.'
                        />
                        <a href="https://celadon-croquembouche-3ca03a.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                        <a href="https://github.com/renu-run-run/myGeekGallery" target="_blank" rel="noopener noreferrer">Source code</a>
                    </td>

                    <tb className="card-gap">
                        <Card
                            title='Password Generator'
                            imageUrl='p3.jpg'
                            body='This is a password generator website implemented in React js. which uses the concept of state lifting and logic is based on it.'
                        />
                        <a href="https://imaginative-nougat-e114e8.netlify.app" target="_blank" rel="noopener noreferrer">Live Link</a>
                        <a href="https://github.com/renu-run-run/passwordgenerater" target="_blank" rel="noopener noreferrer">Source code</a>
                    </tb>
                

                    <td className="card-gap">
                        <Card
                            title='Memory Game'
                            imageUrl='p2.jpg'
                            body='This is memory game implemented in React js . It uses the idea of prop driling, useState , useEffect and some logic based on it'
                            
                            />
                            <a href="https://renu-run-run.github.io/memorygame/" target="_blank" rel="noopener noreferrer">Live Link</a>
                            <a href="https://github.com/renu-run-run/memorygame" target="_blank" rel="noopener noreferrer">Source code</a>
                    </td>
                </tr>
               
            </table>

        </div>


    )
}

// https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?t=st=1653274052~exp=1653274652~hmac=f4870b03aebc1534f4f618743bded7cc58f498bfe4b481ee779569f5af11a62e&w=1060
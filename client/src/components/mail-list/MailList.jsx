import "./mailList.css"

export const MailList =()=>{
    return (
        <div className="mail">
            <h1 className="mailTitle">
                Save Time Save Money!
            </h1>
            <p className="mailDescription">Sign up and we'll send the best deals to you </p>
           <div className="mailInputContainer">
            <input type="text" className="mailInput" placeholder="Your Email"/>
            <button >Subscribe</button>
           </div> 
        </div>
    )
}
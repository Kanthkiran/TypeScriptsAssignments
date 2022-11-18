type Greetpoprs = {
    name:string
    messageCount:number
    isLoggedIn:boolean
    details : {
        first:string
        last:string
    }
}
export const Greet = (props:Greetpoprs)=>{
    return(
        <div>
            {props.isLoggedIn ? <h2>Welcome {props.name}! You have {props.messageCount} unread messages</h2>
                                :
                                <h2>Login first</h2>
            }
            <div>
                <h3>{props.details.first}</h3>
                <h3>{props.details.last}</h3>
            </div>
        </div>
    )
}
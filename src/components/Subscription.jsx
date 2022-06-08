import { createSignal, createEffect } from "solid-js";

export default function Subscription() {
    const [email, setEmail] = createSignal("");
    const [errorMsg, setErrorMsg] = createSignal("");



    // createEffect( () => {
    //    alert(errorMsg());
    // })

    
    const addSubscriber = async (e) => {
        e.preventDefault();

        if(email() !== '') {
            const data = {
                
                    email_address: email(),
                    status: 'subscribed',
                
            };
            
            const postData = JSON.stringify(data);

            const rawResponse = await fetch('https://us18.api.mailchimp.com/3.0/lists/30d7cfc65a/members', {
                method: 'POST',
                headers: {
                Authorization: 'Basic 932e7462bc86cde7b65448efd7d8ed55-us18',
                ContentType: 'application/json'
                },
                body: postData
            });

            console.log(rawResponse);
            


        }
            

        

    };





    return (
        <>  
            <form onSubmit={addSubscriber}>
                <input
                type="email"
                id="email"
                value={email()}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input type="submit" value="submit" />
            </form>
        </>
    );
}

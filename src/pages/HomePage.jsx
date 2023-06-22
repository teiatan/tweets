import { useEffect } from "react";
import { getUsers, updateUserFollowers } from "service/users";

const HomePage = () => {

    useEffect(()=>{
        getUsers(1, 10).then(res => {
            console.log(res);
        }).catch(error => {
        // handle error
        });
        updateUserFollowers(1, 111).then(res => {
            console.log(res);
        }).catch(error => {
        // handle error
        });
    })
    return(
        <>
            <h1>Homepage</h1>
        </>
    );
};

export default HomePage;
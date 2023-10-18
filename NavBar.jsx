import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Button, Menu } from "semantic-ui-react"


export const NavBar = () => {
    const [backendData, setBackendData] = useState("");

    useEffect(() => {
        fetch("/mail")
            .then((response) => response.text())
            .then((data) => {
                setBackendData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
        <>
            <Menu className='menu'>
                <Menu.Item>
                    <p><strong>DEV@Deakin</strong></p>
                </Menu.Item>
                <Menu.Item>
                    <form className='fs'>
                        <label htmlFor='search'></label>
                        <input type="search" name="searchname" id="search" placeholder='Search' />
                    </form>
                </Menu.Item>
            </Menu>
            <br />

            <Button className='btn' primary> Post </Button>

            <Link to='/login'>
                <Button className='btn1' primary> Login </Button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div dangerouslySetInnerHTML={{ __html: backendData }}></div>
        </>
    )
}

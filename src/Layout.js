import {
    Route,
    Link
  } from "react-router-dom";
  
export default function Layout(
    {
        component: Component, 
        ...rest
    }
) {
    return (
        <Route {...rest} render={(props) => (
            <>
                {
                    rest.header
                    &&
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                            </ul>
                        </nav>    
                    </div>
                }
                <Component {...props} />
            </>
        )} />
    )
}
import React from 'react'
import ViewProduct from './ViewProducts'
import AddProduct from './AddProduct'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'


export default function AdminProfile(){
    return(

            <BrowserRouter>
                <div className="text-center">
                    <button type="submit" className="btn btn-success ms-3 mt-3">
                        <Link className="nav-link text-white" to="/AddProducts">Add Products</Link>
                    </button>
                    <button type="submit" className="btn btn-info ms-5 mt-3">
                        <Link className="nav-link text-dark " to="/ViewProducts">View Products</Link>
                    </button>
                 </div>

                <Switch>
                    <Route path="/AddProducts">
                        <AddProduct/>
                    </Route>
                    <Route path="/ViewProducts">
                        <ViewProduct/>
                    </Route>
                </Switch>
            </BrowserRouter>
    )
}


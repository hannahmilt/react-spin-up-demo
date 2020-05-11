import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {Other} from "./pages/Other";


const Routing = () => (
	<>
		<h2>Navbar</h2>
		<BrowserRouter>
			<Switch>
				<Route exact path = "/Other" component = {Other}/>
				<Route exact path="/" component={Home}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
		<h3>Footer</h3>
	</>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));
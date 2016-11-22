import React from 'react';
import AppBar from 'material-ui/AppBar';

import '../css/header.css';

class Header extends React.Component {

	render() {
		return (
			<AppBar
	          className="perceptool-header"
	        />
		);
	}
}

export default Header;
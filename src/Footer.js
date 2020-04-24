import React from 'react';

const copyright = '©';

function Footer(p){
	return (
			<footer id="footer">
        <div>{p.author} {copyright} </div>
				<div>{(new Date()).getFullYear()}</div>
      </footer>
	);
}


export default Footer;
import React from 'react';
import BoxItem from './BoxItem';

function Box(p){	
	var lis = []; 

	for(var i = 0; i < p.items.length; ++i){
		var item = p.items[i];
		var li = <BoxItem module={item.module} name={item.name} due={item.due} isImportant={item.isImportant} key={i} id={item.id}/>;
		lis.push(li);
	}

	return (
		<div id={p.state} className="box">
			<ul className="box-list">{lis}</ul>
		</div>
	);
}

export default Box;
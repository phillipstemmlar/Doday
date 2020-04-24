import React from 'react';

function BoxItem(p){
	return (
		<li className={((p.isImportant && p.isImportant === "true")?"box-item important":"box-item")} key={p.i} >
			<span className="item-module">{p.module}</span>
			<span className="item-name">{p.name}</span>
			<span className="item-due">{p.due}</span>
			<div className="strike"></div>
		</li>
	);
}

export default BoxItem;


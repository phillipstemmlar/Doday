import React from 'react';
import AddItem from './AddItem';
import AddItemImportant from './AddItemImportant';
import RemoveItem from './RemoveItem'

function ControlBar(){
	return (
		<div id="controlBar">
			<AddItem />
			<AddItemImportant />
			<RemoveItem />
		</div>
	);
}

export default ControlBar;
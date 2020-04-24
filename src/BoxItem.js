import React from 'react';

function convertDate(date){
	var d = new Date(date), month = '' + d.getMonth(), day = '' + d.getDate(), year = d.getFullYear();
	const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][month];
	return [day, mon, year].join(' ');
}

function revertDate(date){
	var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('/');
}

function BoxItem(p){
	return (
		<li className={((p.isImportant && p.isImportant === "true")?"box-item important":"box-item")} key={p.i} >
			<ItemProperty name="item-module" value={p.module} id={p.id} />
			<ItemProperty name="item-name" value={p.name} id={p.id} />
			<ItemProperty name="item-due" value={p.due} id={p.id} con={convertDate} rev={revertDate}/>
			<div className="strike"></div>
		</li>
	);
}

export default BoxItem;

class ItemProperty extends React.Component {
		constructor(props){
			super(props);

			this.convert = this.props.con || ((val) => {return val;});
			this.revert = this.props.rev || ((val) => {return val;});

			this.value = this.revert(this.props.value);
			this.id = this.props.id + '_' + this.props.name;
		}	
	
    handleClick(e) {
			this.startEditing();
    }
		
		hanldeBlur(e){
			console.log(e.currentTarget.dataset.id);
			this.stopEditing();
		}

		handleKeyPress(event, e){
			if(event.key === 'Enter'){
				document.getElementById(e.id).blur();
			}
		}

		conValue(){
			return this.convert(this.value);
		}


		startEditing(id){
			var sender = document.getElementById(id);
			sender.contentEditable=true;
			sender.className = "itemEditing";
			sender.focus();
			sender.innerHTML = this.value;
			document.execCommand('selectAll',false,null)
		}
		
		stopEditing(id){
			var sender = document.getElementById(id);
			sender.contentEditable=false;
			
			this.value = sender.innerHTML;
			sender.innerHTML = this.conValue();

			sender.className = "";
		}

    render() {
			var inner = <span 
				onDoubleClick={() => {this.startEditing(this.id);}}
				onBlur={() => {this.stopEditing(this.id);}}
				onKeyPress={(e) => {this.handleKeyPress(e,this);}}
			contentEditable="false" className="" id={this.id} suppressContentEditableWarning={true}>
				{this.conValue()}
			</span>;

			return (<span className={this.props.name}>{inner}</span>);
    }
}
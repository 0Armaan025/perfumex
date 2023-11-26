"use client";

import React, { useState } from "react"; 
import PhoneInput from 'react-phone-input-2'
import './phoneinput.css';

import 'react-phone-input-2/lib/style.css'

export default class PhoneInputGfg extends React.Component { 
constructor(props) { 
	super(props); 
	this.state = { phone: "" }; 
} 
render(){ 
	return ( 
	<div> 
		
		<PhoneInput 
        className="phoneInputField bg-transparent"
		country={'us'} 
		value={this.state.phone} 
		onChange={phone => this.setState({ phone })} 
		/> 
	</div> 
	); 
} 
};

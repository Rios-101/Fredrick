"use client";
import React from "react";
// @ts-ignore
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";


const WhatsAppWidgetDisplay = () => {
	const countryCode = "+1"
	const phoneNo = "8784009769"

	return (
		<>
			<WhatsAppWidget
				phoneNo={countryCode + phoneNo}
				position='right'
				widgetWidth='300px'
				widgetWidthMobile='280px'
				autoOpen={false}
				autoOpenTimer={5000}
				messageBox={false}
				messageBoxTxt='Hi Fredrick support,'
				iconSize='60'
				iconColor='white'
				iconBgColor='#25D366'

				headerIconSize='20'
				headerIconColor='#21a79c'
				headerTxtColor='white'
				headerBgColor='#21a79c'
				headerTitle='Fredrick Cyrus assistant'
				headerCaption='Online'
				bodyBgColor='#e5f5f4'
				chatPersonName='Fredrick Support'
				chatMessage={<>How can we help?</>}
				footerBgColor='#21a79c'
				placeholder='Type a message..'
				btnBgColor='#000'
				btnTxt='Start Chat'
				btnTxtColor='white'
			/>
		</>
	);
};

export default WhatsAppWidgetDisplay;

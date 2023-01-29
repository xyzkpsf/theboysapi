import React from 'react';
import Box from "@mui/material/Box";
import {THEME_COLOR} from "../Style";
import Typography from "@mui/material/Typography";

function Docs() {
	return (
		<Box sx={{
			marginTop: "50px",
			height: "100%vh",
			display: "flex",
			flexDirection: "column",
			backgroundColor: THEME_COLOR.BACKGROUND_COLOR,
			paddingLeft: "24px",
			paddingRight: "24px",
			textAlign:"left",
			alignItems:"start",
      }}>
			<Typography variant="h2" >
      	Documentation
			</Typography>
			<Typography variant="h3" >
      	Introduction
			</Typography>
			<Typography variant="h6" >
      	This documentation offers a quick overview of the API,
				and a few examples of how to use it.
				Please take a look before proceeding and have fun!
			</Typography>
			<Typography variant="h3" >
      	Overview
			</Typography>
			<Typography variant="h6" >
      	{'  '}Base Url
				<Box component="span" sx={{ display: 'block' }}>
					Get https://www.theboysapi.com/api/
				</Box>
			</Typography>
			<Typography variant="h6" >
      	{'  '}Request and Response Format
			</Typography>
			<Typography variant="body1" >
      	{'  '}This api only accepts https get requests and all responses are in JSON format.
			</Typography>
			<Typography variant="h6" >
      	{'  '}Available Sources
			</Typography>
			<Typography variant="body1" >
      	<Box component="span" sx={{ display: 'block' }}>
					{/*// todo display : here*/}
					characters, affiliations, episodes
				</Box>
			</Typography>
			<Typography variant="h6" >
      	{'  '}Filter
			</Typography>
			<Typography variant="h4" >
      	Rate Limiting
			</Typography>
		</Box>
	);
}

export default Docs;
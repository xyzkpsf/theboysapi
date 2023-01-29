import React from 'react';
import Box from "@mui/material/Box";
import {THEME_COLOR} from "../Style";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 200
const subTitle = ['Base URL', 'Available Resource', 'Pagination', 'Filters', 'Rate Limiting'];
const subTitleIdMap : {[key:string]: string} = {
	'Base URL': 'baseUrl',
	'Available Resource': 'availableResource',
	'Pagination': 'pagination',
	'Filters': 'filters',
	'Rate Limiting': 'rateLimiting'
}
function Docs() {
	return (
		<>
			<Drawer
				sx={{
					marginTop: "50px",
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
				}}
				variant="permanent"
				anchor="left"
			>
				<List>
					{['Introduction', 'Overview', 'Base URL', 'Available Resource', 'Pagination', 'Filters', 'Rate Limiting'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								{
									subTitle.includes(text) ? <a href={`/docs/#${subTitleIdMap[text]}`}><ListItemText primary={text} inset/></a> : <ListItemText primary={text}/>
								}
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{
					marginTop: "50px",
					height: "100%vh",
					display: "flex",
					flexDirection: "column",
					backgroundColor: THEME_COLOR.BACKGROUND_COLOR,
					paddingLeft: "24px",
					paddingRight: "24px",
					textAlign: "left",
					alignItems: "start",
					marginLeft: `${drawerWidth}px`,
					width: { sm: `calc(100% - ${drawerWidth}px)` }
		}}>
			<Typography variant="h2">
				Documentation
			</Typography>

			<Typography variant="h3">
				Introduction
			</Typography>
			<Typography variant="h6">
				This documentation offers a quick overview of the API,
				and a few examples of how to use it.
				Please take a look before proceeding and have fun!
			</Typography>
			<Typography variant="h3">
				Overview
			</Typography>
				<div id={"baseUrl"}>
					<Typography variant="h6">
					{'  '}Base Url
					<Box component="span" sx={{display: 'block'}}>
						Get https://www.theboysapi.com/api/
					</Box>
				</Typography>
				</div>
			<Typography variant="h6">
				{'  '}Request and Response Format
			</Typography>
			<Typography variant="body1">
				{'  '}This api only accepts https get requests and all responses are in JSON format.
			</Typography>
			<Typography variant="h6" id={"availableResource"}>
				{'  '}Available Sources
			</Typography>
			<Typography variant="body1">
				<Box component="span" sx={{display: 'block'}}>
					{/*// todo display : here*/}
					characters, affiliations, episodes
				</Box>
			</Typography>
				<div id={"pagination"}>
					<Typography variant="h6" >
						{'  '}Pagination
					</Typography>
				</div>
				<div id={"rateLimiting"}>
					<Typography variant="h6">
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
				</Typography>
				</div>

				<div id={"filters"}>
					<Typography variant="h6" >
				{'  '}Filter
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
			</Typography>
				</div>

				<div id={"rateLimiting"}>
					<Typography variant="h6" >
				Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
						Rate Limiting Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices.
						Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
						nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
						leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at
						consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
						sapien faucibus et molestie ac.
			</Typography>
				</div>
		</Box></>
	);
}

export default Docs;
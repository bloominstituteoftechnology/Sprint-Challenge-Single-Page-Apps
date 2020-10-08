import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
	return (
		<Nav variant="tabs" icon="labeled" name="home" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href="/">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/CharacterList" icon="labeled" name="character" eventKey="link-1">
					Characters
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/LocationList" icon="labeled" name="location" eventKey="link-2">
					Location
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/EpisodeList" icon="labeled" name="episode" eventKey="link-3">
					Episodes
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

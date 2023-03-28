import { HomePage, GallaryPage, ContactsPage } from '../pages';
import { createRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './app.scss';
const routes = [
	{ path: '/', name: 'Home', element: <HomePage />, nodeRef: createRef() },
	{ path: '/gallary', name: 'Gallary', element: <GallaryPage />, nodeRef: createRef() },
	{
		path: '/contact',
		name: 'Contact',
		element: <ContactsPage />,
		nodeRef: createRef(),
	},
];
function App() {
	const location = useLocation();
	const cssRef = createRef();
	return (
		<div className="app">
			<main>
				<SwitchTransition>
					<CSSTransition
						nodeRef={cssRef}
						timeout={300}
						classNames="page"
						unmountOnExit
						key={location.pathname}
					>
						{(state) => (
							<Routes>
								{routes.map((item) => {
									return <Route path={item.path} element={item.element} key={item.name} />;
								})}
							</Routes>
						)}
					</CSSTransition>
				</SwitchTransition>
			</main>
		</div>
	);
}

export default App;

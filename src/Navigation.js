import { Link } from 'react-router-dom'


function Navigation(props) {
	return (
		<div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
			<div className="flex-none">
				<Link to='/'>
					<button className="btn btn-square btn-ghost">
						Movie Theatre
					</button>
				</Link>
			</div> 
			<div className="flex-1 px-2 mx-2">
				{/* <span className="text-lg font-bold">
								With one icon
							</span> */}
			</div>
		</div>
	);
}

export default Navigation;
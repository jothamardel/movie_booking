import { useRouteMatch } from 'react-router-dom';


function Admin(props) {
	console.log(props);
	return (
		<div style={{ display: 'flex', justifyContent: 'center', position: 'relative'}}>
			<div style={{ 
				width: '20%', 
				background: '#3d4451', 
				position: 'absolute', 
				top: 0, 
				left: 0, 
				bottom: 0, 
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<ul style={{ color: 'white'}}>
					<li className="admin_item">Add Movie</li>
					<li className="admin_item">Bookings</li>
					<li className="admin_item">Movies</li>
				</ul>
			</div>
			<div>

			</div>
		</div>
	)
}


export default Admin;
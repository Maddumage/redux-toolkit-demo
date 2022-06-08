import './App.css';

import { useFetchPhotosQuery } from './features/photos/photosAPI';

function App() {
	const { data = [], isFetching } = useFetchPhotosQuery();
	return (
		<div className='App'>
			<div>
				<p>{`Unsplash Photos : ${data.length}`}</p>
				<table>
					<thead>
						<tr>
							<th>Description</th>
							<th>Image</th>
						</tr>
					</thead>
					<tbody>
						{data.map((photo) => (
							<tr key={photo.id}>
								<td>
									{
										photo.description
									}
								</td>
								<td>
									<img
										src={
											photo
												.urls
												.small
										}
										height={
											200
										}
										alt={photo.created_at.toString()}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;

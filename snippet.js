function getTableRows() {
		fetch('https://www.googleapis.com/fusiontables/v2/query?sql=SELECT * FROM 1X6rLhpuJTm1mxwGxAMCSjVM1L5oftBdp3Y_tXj8s&key=AIzaSyCmLhRF__ZehY_l0sqTyuaCJK10SUtFBQw').then(response => response.json()).then(data => {
			console.log('data', data)
			data.rows.forEach(row => {
				const siteName = row[0];
				const lat = row[10];
				const lng = row[11];
				const visitPlanned = row[13];
				placeMarker({lat, lng}, {
					icon: {
						path: google.maps.SymbolPath.CIRCLE,
						scale: 4,
						fillColor: visitPlanned === 'yes' ? 'green' : 'red',
						fillOpacity: 1,
						strokeColor: visitPlanned === 'yes' ? 'green' : 'red',
						strokeWeight: 1
					},
					siteName,
					info: `
						<b>${siteName}</b>
						Do you want to sample this site? <br />
						<button onclick="console.log('yes!')">Yes</button> <button onclick="console.log('no!')">No</button>
					`
				});
			});
		});
	}

	getTableRows();

	function planVisitWithContact(siteId, contact) {
	const sql = `
		UPDATE 1X6rLhpuJTm1mxwGxAMCSjVM1L5oftBdp3Y_tXj8s SET 'Visit Planned' = 'yes' WHERE 'UWW Site ID' = 'HOC-02-S'
	`;
	fetch('');
}
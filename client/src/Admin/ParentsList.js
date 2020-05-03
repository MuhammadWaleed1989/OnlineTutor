import React from 'react'

export default function ParentsList() {
	return (
		<>
			<div className="content-wrapper">
				<div className="page-header page-header-light">
					<div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
						<div className="d-flex">
							<div className="breadcrumb">
								<a href="index.html" className="breadcrumb-item"><i className="icon-home2 mr-2"></i> Parent List</a>
							</div>
							<a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more"></i></a>
						</div>

					</div>
				</div>

				<div className="content">

					<div className="card">
						<div className="table-responsive">
							<table className="table table-striped">
								<thead>
									<tr className="border-bottom-danger">
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Username</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Eugene</td>
										<td>Kopyov</td>
										<td>@Kopyov</td>
									</tr>
									<tr className="border-top-info">
										<td>2</td>
										<td>Victoria</td>
										<td>Baker</td>
										<td>@Vicky</td>
									</tr>
									<tr className="border-top-primary">
										<td>3</td>
										<td>James</td>
										<td>Alexander</td>
										<td>@Alex</td>
									</tr>
									<tr className="border-top-success">
										<td>4</td>
										<td>Franklin</td>
										<td>Morrison</td>
										<td>@Frank</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

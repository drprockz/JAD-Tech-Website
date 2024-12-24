'use client'
import CountUp from 'react-countup'

export default function Static2() {
	return (
		<>
			<section className="section-static-1 position-relative fix z-0 section-padding">
				<div className="container">
					<div className="inner">
						<div className="row justify-content-between">
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Keywords <br /> Ranked </h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={1} enableScrollSpy={true} /><span>k</span></span>
										<p className="fs-5">on Search Engine</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Successfully <br /> completed</h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={45} enableScrollSpy={true} /></span>
										<p className="fs-5">Finished projects</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Achieved<br /> Organic Traffic</h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={200} enableScrollSpy={true} /><span>%</span></span>
										<p className="fs-5">via SMO & SEO</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<h6>Managed <br /> Accounts</h6>
										<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={50} enableScrollSpy={true} /><span></span></span>
										<p className="fs-5">on all social media platform</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

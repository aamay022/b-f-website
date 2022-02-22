
import React from "react"; 
import { useTranslation } from "react-i18next";
const Prices =(props)=> {

	const { t } = useTranslation();

    return (
        <div id="page-wrapper">

        {/* <!-- Header --> */}
            <section id="header">
			<nav>
				<button onClick={()=>props.handleClick('en')}>
					English
				</button>
				<button onClick={()=>props.handleClick('sp')}>
					Espanol
				</button>
			</nav>
			<br></br>
			<br></br>
                {/* <!-- Logo --> */}
                    <h1><a href="/">Brave & Free Miami Tour Bus</a></h1>

                {/* <!-- Nav --> */}
                    <nav id="nav">
                        <ul>
                        <li><a href="/">{t('Nav1.1')}</a></li>
								<li className="current">
									<a href="/Prices">{t('Nav2.1')}</a>
								</li>
								<li><a href="/Faqs">{t('Nav3.1')}</a></li>
								<li><a href="/ContactUs">{t('Nav4.1')}</a></li>
								<li><a href="/BookNow">{t('Nav5.1')}</a></li>
                        </ul>
                    </nav>
					<br></br>
						<h6>(786) 332-9320</h6>
            </section>
			<section id="main">
					<div className="container">

						{/* <!-- Content --> */}
							<article className="box post">
								<header>
									<h2>{t('Nav5.1')}</h2>
									<p>Prices</p>
								</header>
								<h2>{t('single.1')}</h2>
										
										<h3>$55 + FEES</h3>
										<h6>{t('s1.1')}</h6>
										<p>2 HOUR TOUR</p>
										<p>{t('byob.1')}</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>
										UP TO 15 PAX
										(Any additional pax $35)</p>
										<p>PRIVATE RENTAL</p>
										<h2>{t('group.1')}</h2>
										<h3>$525 + FEES</h3>
										<p>2 HOUR TOUR</p>
										<p>{t('byob.1')}</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>
										UP TO 15 PAX
										(Any additional pax $35)</p>
										<p>PRIVATE RENTAL</p>
										<h2>Happy Hour</h2>
										
										<h3>$475 + FEES</h3>
										<h6>{t('h1.1')}</h6>
										<p>2 HOUR TOUR</p>
										<p>{t('byob.1')}</p>
										<p>COOLER + ICE + DJ ON BOARD</p>
										<p></p>
										<p>
										UP TO 15 PAX
										(Any additional pax $35)</p>
										<p>PRIVATE RENTAL</p>
								<section>	
								</section>
							</article>
							<a href="/Faqs" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
					</div>
				</section>


<section id="footer">
					<div className="container">
								<section>
									<header>
									<h2>{t('visit.1')}</h2>
									</header>
									<ul className="social">
										<li><a className="icon brands fa-facebook-f" href="/Faqs"><span className="label">Facebook</span></a></li>
										<li><a className="icon brands fa-twitter" href="/Faqs"><span className="label">Twitter</span></a></li>
										<li><a className="icon brands fa-yelp" href="https://www.yelp.com/biz/brave-and-free-party-bus-tours-miami"><span className="label">Yelp</span></a></li>
										<li><a className="icon brands fa-instagram" href="https://www.instagram.com/braveandfree_miami/?r=nametag"><span className="label">Instagram</span></a></li>
									</ul>
									<ul >
										<li>
											<h3>Address</h3>
											<p>
												4719 NW 7 ST,<br />
												MIAMI,<br />
												33126
											</p>
										</li>
										<li>
											<h3>Mail</h3>
											<p><a href="/ContactUs">braveandfree305@gmail.com</a></p>
										</li>
										<li>
											<h3>Phone</h3>
											<p>(786) 332-9320</p>
										</li>
									</ul>
								</section>
							</div>
							<div className="col-12">

								{/* <!-- Copyright --> */}
									<div id="copyright">
										<ul className="links">
											<li>&copy; Untitled. All rights reserved.</li>
										</ul>
									</div>

							
						
					</div>
				</section>
    </div>
    )
}


export default Prices;
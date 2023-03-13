import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaCopyright,
	FaBehance
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className='text-dark'>
			<Container>
				<Row id='footer-row'>
					<Col
						md={6}
						className={
							"d-flex flex-column align-items-center justify-content-center mb-4  mb-md-0"
						}>
						<h5 className='mb-3'>
							Social Links
						</h5>
						<Row>
							<Col md={12}>
								<a
									href='https://www.linkedin.com/in/franco-vanney-0b9273a1/'
									target={
										"_blank"
									}>
									<FaLinkedin
										className='mx-2 footer-icon'
										size='25px'
									/>
								</a>
								<a
									href='https://github.com/francovanney'
									target={
										"_blank"
									}>
									<FaGithub
										className='mx-2 footer-icon'
										size='25px'
									/>
								</a>
								<a
									href='https://www.behance.net/francovanney'
									target={
										"_blank"
									}>
									<FaBehance
										className='mx-2 footer-icon'
										size='30px'
									/>
								</a>
								<a
									href='https://www.instagram.com/francovanney/'
									target={
										"_blank"
									}>
									<FaInstagram
										className='mx-2 footer-icon'
										size='25px'
									/>
								</a>
							</Col>
						</Row>
					</Col>
					<Col
						md={6}
						className={
							"d-flex flex-column align-items-center justify-content-center"
						}>
						<h5 className='mb-3'>Links</h5>
						<Row>
							<Col md={12}>
								<a href='#'>
									<HiMail
										className='mx-2 footer-icon'
										size='25px'
									/>
									<a href='mailto:francoavanney@gmail.com?subject=Contacto%20desde%20porftolio'>
										francoavanney@gmail.com
									</a>
								</a>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Container className='text-center pt-4'>
						<Col md={12}>
							<p>
								<span>
									Franco
									Vanney{" "}
									{""}
								</span>
							</p>
							<p>
								<FaCopyright />
								<span className='m-2'>
									{new Date().getFullYear()}
								</span>
							</p>
						</Col>
					</Container>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;

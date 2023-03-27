import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaCopyright,
	FaBehance
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='text-dark' id='footer'>
			<Container className='text-center text-white d-flex align-items-center justify-content-center'>
				<Row>
					<Col md={12}>
						<span>
							Desarrollado por {""}{" "}
							<a
								className='p-2'
								href={
									"https://pampacode.com/"
								}
								target='_blank'>
								Pampa Code{" "}
							</a>
							<FaCopyright />
							<span className='p-2'>
								{new Date().getFullYear()}
							</span>
						</span>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;

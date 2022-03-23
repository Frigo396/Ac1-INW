import estilo from '../styles/about.module.css'
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

export default function About() {
    return(
        <div className={estilo.container_bg}>
            <Container>
                <Row>
                    <Col>
                    <Image className="img-fluid" src={'/assets/image-about.png'} alt="" width={500} height={500}></Image>
                    </Col>
                    <Col xs={12} md={6} className={estilo.details}>
                        <h2>Best Offer in Town</h2>
                        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>
                        <p>Donec vitae lacus in tellus gravida tempor id ut turpis. Pellentesque fermentum, dui vel malesuada mattis, arcu est elementum lacus, vitae viverra felis turpis at odio.</p>
                        <button className={'btn '+ estilo.botao}>Explore More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
import estilo from '../styles/download.module.css'
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

export default function Download(){
    return(
        <div className={estilo.container_bg}>
            <Container className={estilo.Container}>
                <h3>Best Offer in Town</h3>
                <h3>Download the App</h3>
                <p>Donec vitae lacus in tellus gravida tempor id ut turpis. Pellentesque fermentum, dui vel malesuada mattis, arcu est elementum lacus, vitae viverra felis turpis at odio.</p>
            </Container>
            <Container className={estilo.imagens}>
                <Row>
                    <Col xs={12} md={6}>
                        <Image className='img-fluid' src={'/assets/app-apple-btn.svg'} alt="" width={244} height={76}></Image>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image className='img-fluid' src={'/assets/app-play-btn.svg'} alt="" width={244} height={76}></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

import estilo from "../styles/service.module.css"
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

export default function Service(){
    return(
        <div className={estilo.container_bg}>
            <Container className={estilo.container}>
                <Row>
                    <Col xs={12} md={4} className={estilo.centro}>
                        <Image className="img-fluid" src={'/assets/image-one.png'} alt="" width={500} height={500}></Image>
                        <h2>Best Offer in Town</h2>
                        <p>Donec vitae lacus in tellus gravida tempor id ut turpis. Pellentesque fermentum, dui vel malesuada mattis, arcu est elementum lacus, vitae viverra felis turpis at odio.</p>
                    </Col>
                    <Col xs={12} md={4} className={estilo.centro}>
                        <Image className="img-fluid" src={'/assets/image-two.png'} alt="" width={500} height={500}></Image>
                        <h2>Fast Delivery</h2>
                        <p>Donec vitae lacus in tellus gravida tempor id ut turpis. Pellentesque fermentum, dui vel malesuada mattis, arcu est elementum lacus, vitae viverra felis turpis at odio.</p>
                    </Col>
                    <Col xs={12} md={4} className={estilo.centro}>
                        <Image className="img-fluid" src={'/assets/image-three.png'} alt="" width={500} height={500}></Image>
                        <h2>Quallity Food</h2>
                        <p>Donec vitae lacus in tellus gravida tempor id ut turpis. Pellentesque fermentum, dui vel malesuada mattis, arcu est elementum lacus, vitae viverra felis turpis at odio.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
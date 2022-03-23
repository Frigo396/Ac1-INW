import Head from "next/head"
import Service from "../components/service"
import Topo from "../components/topo"
import About from "../components/about"
import Download from "../components/download"

export default function Home(){
    return(
        <>
        <Head>
            <title>Projeto 1 - Landing Page</title>
        </Head>
        <main>
            <Topo />
            <Service />
            <About />
            <Download />
        </main>
            
        </>
    )
}
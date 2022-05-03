import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Slider from '../components/Slider'


function Contact() {
    return (
        <div>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Saffron Beauty Salon Next App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <h1>Contact Page</h1>
        </div>
    )
}

export default Contact;
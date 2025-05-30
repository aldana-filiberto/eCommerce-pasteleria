import React from 'react'
import '../styles/Footer.css'

const Footer = () => {


    let style = { fontFamily: 'Italianno', fontSize: '2em', fontWeight: '500' }
    return (
        <footer>
            <section>
                <p style={style}>&copy;2025</p>
            </section>

        </footer>
    )
}

export default Footer
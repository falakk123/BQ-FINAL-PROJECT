import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Terms() {

    const inlineStyles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        content: {
            fontSize: '16px',
            lineHeight: '1.5',
        },
    };

    return (
        <div className="container" style={inlineStyles.container}>
            <h2 style={inlineStyles.title}>Terms of Service</h2>
            <div style={inlineStyles.content}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ea esse illum provident, ut maxime. Iusto reiciendis aliquid omnis sed, provident eaque aliquam, cum facilis obcaecati porro pariatur! Nesciunt, cumque?</p>
                <p>Nullam vestibulum cursus erat, a scelerisque ipsum auctor vel. Nulla malesuada ligula at ullamcorper blandit. Vivamus posuere metus ac eleifend hendrerit. Phasellus in ex sit amet tellus eleifend eleifend. Sed vel metus non ipsum convallis commodo in ac metus.</p>
                {/* Add more content here */}
            </div>
            {/* </div> */}



            <div className='container'>
                <Row>
                    <Col><h3 style={inlineStyles.title}>Generate Your Terms & Conditions</h3>
                        <p>We create customized Terms & Conditions for web, Android & iOS app, Facebook app, Twitter developer account, Squarespace, Blogger, Wordpress, Shopify and more.</p></Col>
                    <Col><img src='https://termify.io/images/terms-and-conditions.png' alt='img' /></Col>
                </Row>
            </div>

        </div>



    );
}




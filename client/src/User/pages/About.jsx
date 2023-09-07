import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MdHeight, MdWidthWide } from 'react-icons/Md';

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='d-flex justify-content-center mt-5'>About Page</h1>
          <Container className='container my-4 p-4 image-fluid rounded-square border'>
            <Row>
              <Col>
                <Image width={600} height={400} src="https://www.shutterstock.com/shutterstock/photos/1086930476/display_1500/stock-vector-makeup-products-banner-advertising-template-with-text-for-beauty-events-or-store-eyeshadow-case-1086930476.jpg"  />
              </Col>
              <Col className='p-5 mt-5'>
                <h1>A Smile is the Best MakeUp Girl Can Wear</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aperiam voluptas reprehenderit ut animi labore illum atque. Nobis, neque ratione.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloribus sequi nisi esse, impedit dignissimos, officia perspiciatis neque perferendis quis, quia necessitatibus similique voluptates quod. Aliquam, reiciendis deserunt delectus porro illum vitae modi maiores possimus quo neque molestias, numquam quos deleniti necessitatibus repellat at fugit amet saepe ut illo soluta debitis, voluptate aut quis. Placeat eum, saepe itaque error tempore porro accusamus recusandae eaque numquam esse repellendus iusto vitae reprehenderit laboriosam. Illo pariatur ducimus natus reiciendis adipisci mollitia sunt facilis necessitatibus consectetur ipsum laudantium est maiores culpa enim id, animi, autem dolor! Expedita, est vel explicabo aut accusamus saepe. Tempora.</p>
              </Col>
            </Row>
          </Container>

        </Col>
      </Row>
      <Row>

        <Col>
          <h1 style={{ backgroundColor: 'black', color: "white" }}>
            Lorem, ipsum dolor.
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas id illo quaerat est veniam voluptate! Vitae iusto iure sequi earum commodi et eveniet rem voluptatibus dolorem repudiandae, unde placeat, nobis, praesentium fugit nam aperiam fuga. Tempora, optio neque. Provident!</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore culpa nesciunt nostrum accusantium dolorum aspernatur voluptatum. Vero earum a officiis deserunt, ex expedita. Consectetur enim rerum neque dolorem sit quidem esse alias mollitia, explicabo ea eos nisi culpa ut.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio a libero nihil hic dolores est cupiditate nemo, distinctio adipisci neque, deserunt facere tempore in veniam autem assumenda modi magnam. Eligendi libero unde non natus quod dolores ratione, ad suscipit at. Distinctio esse nulla eum consectetur earum autem voluptatem architecto.</p>
        </Col>
        <Col>

          <Image
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/03/Guide_to_cosmetics_branding_jpg_JCDh-DN5.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces"
            alt="About Image"
            style={{ maxWidth: '100%', marginTop: '20px' }}
          />
        </Col>
        {/* <Col>2 of 2</Col> */}


      </Row>
    </Container>
  );
};

export default About;

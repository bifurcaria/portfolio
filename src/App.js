import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react'
import { Container, Header, Menu, Image, Divider, Sticky } from 'semantic-ui-react'
import portfolio from './portfolio.json'


function App() {

  const [activeItem, setActiveItem] = useState('closest')
  const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

  return (

    <Container id='main'>

      <Menu text id="nav" key="navigation" >
        <Menu.Item
          name='github'
        />
        <Menu.Item
          name='linkedin'
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='Contact'
          />
        </Menu.Menu>

      </Menu>


      <Container key="title">
        <Header size='huge' textAlign='left' style={{ maxHeight: '1.1em', minHeight: '0' }}>Carla J. Matus</Header>
        <p>Front-end Dev & Graphic Artist</p>
      </Container>

<Sticky >
      <Container key="menu" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Menu pointing secondary vertical attached='bottom'>
          {portfolio.length > 0 && portfolio.map(element => {
            const { name } = element;
            return (
              <Menu.Item
                name={name}
                href='#hola1'
                active={activeItem === 'name'}
                onClick={() => setActiveItem("name")} />
            )
          })}

        </Menu>
      </Container>
      </Sticky>
      {portfolio.length > 0 && portfolio.map(element => {
        const { name, items } = element;
        return (
          <Container key={name}>
            <Divider hidden />
            <Header as="h2" id='hola1'>{name}</Header>

            {items.map(element => {
              const { desc, images, title } = element
              return (
                <Container key={title}>
                  <Header as="h4">{title}</Header>
                  <Image.Group size='medium'>
                    {images.map(element => {
                      return (
                        <Image key={element} src={element} />
                      )
                    })}
                  </Image.Group>
                  <p>{desc}</p>
                  <Divider hidden />
                </Container>

              )
            }
            )}
          </Container>
        )
      })}


    </Container>


  );
}

export default App;

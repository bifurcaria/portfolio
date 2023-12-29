import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState } from 'react'
import { Container, Header, Menu, Image, Divider, Popup } from 'semantic-ui-react'
import portfolio from './portfolio.json'


function App() {

  const [activeItem, setActiveItem] = useState('closest')

  return (

    <Container id='main'>

      <Menu text id="nav" key="navigation" >
        <Menu.Item
          name='github'
          href='https://github.com/bifurcaria'
          target="_blank"
        />
        <Menu.Item
          name='linkedin'
          href='https://www.linkedin.com/in/bifurcaria/'
          target="_blank"
        />
        <Menu.Menu position='right'>
          <Popup
            content={<div><p><a href="mailto:c.carlajm@gmail.com" target="_blank" rel="noopener noreferrer">c.carlajm@gmail.com</a></p><p><a href='https://wa.me/+56993106799' target="_blank">+569 9310 6799</a></p></div>}
            on='click'
            position='bottom right'
            style={{ border: 'none', boxShadow: 'none', textAlign: 'end', padding: '0' }}
            basic
            pinned
            trigger={<Menu.Item
              name='Contact'
            />}
          />

        </Menu.Menu>

      </Menu>


      <Container key="title">
        <Header size='huge' textAlign='left' style={{ maxHeight: '1.1em', minHeight: '0' }}>Carla J. Matus</Header>
        <p>Front-end Dev & Graphic Artist</p>
      </Container>


      <Container key="menu" style={{
        display: 'flex', justifyContent: 'flex-end', position: 'sticky',
        top: '-1px'
      }}>
        <Menu pointing secondary vertical attached='bottom'>
          {portfolio.length > 0 && portfolio.map(element => {
            const { name } = element;
            return (
              <Menu.Item
                name={name}
                href={`#${name}`}
                active={activeItem === 'name'}
                onClick={() => setActiveItem("name")} />
            )
          })}

        </Menu>
      </Container>

      {portfolio.length > 0 && portfolio.map(element => {
        const { name, items } = element;
        return (
          <Container key={name}>
            <Divider hidden />
            <Header as="h2" id={name}>{name}</Header>

            {items.map(element => {
              const { desc, images, title, link } = element
              let ref = <span> Check it <u><a href={link}>here</a></u>.</span>
              
              function hasLinks(obj) {
                if (link) {
                  return ref
                }
              }

              return (
                <Container key={title} className='jsoncontainer'>
                  <Header as="h4">{title}</Header>
                  {images && <Image.Group size='medium'>
                    {images.map(element => {
                      return (
                        <Image key={element} src={element} />
                      )
                    })}
                  </Image.Group>}
                  <p>{desc}{hasLinks(element)}</p>
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

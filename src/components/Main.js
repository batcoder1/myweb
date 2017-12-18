import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Repo</h2>
          <span className="image main"><a href="http://github.com/wooltar"><img src={pic01} alt=""/></a></span>
          <p>Check out</p>
          <button className="button-right" onClick={() => {this.props.onCloseArticle()}} >Close</button>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          
          <h3>Full Stack Developer</h3> 
          <p>
          Autentia Real Business Solutions, S.L.<br />
          Fechas: Feb. 2017 – actualidad <br />
          - Metodología scrum <br />
          - servicios soap y Rest <br />
          - Test: junit, mockito, soapui, karma-jasmine
          - Coding: Angular, javascript, kotlin-Android, java EE 8, Typescript<br />
          - Db: firebase, mysql<br />
          - Utils: services worker, PWA, jenkins, docker, git, webpack, npm   
          </p>

          <h3>Full Stack Developer</h3>
          <p>
          Mel IT technologies <br />
          Fechas: Oct. 2015 – ene. 2017   <br />
          - Desarrollo de aplicaciones web MVC. <br />
          - Desarrollo app con ionic2 <br />
          - Configuración y mantenimiento servidor linux. <br />
          - Tecnologías: AngularJs, adminLte, boostrap, bower, grunt, gulp, bitbucket, git,<br />
           java spring, liquibase, hibernate, MySQL, google engine, amazon WS, thymeleaf,<br />
            REST, ionic, typescript, angular 2, meteor, cordova, Mybatis, jersey, primefaces <br />
         </p>
      
         <h3>Desarrollador web</h3>
          <p>
            Autonomo <br/>
            Fechas: Sept. 2015 – Cct. 2015<br />            
            - Aplicación web uCloud: Disco duro en la nube  <br />
            - Tecnologias: .net C#, Razor, javascript, jquery, SqlServer <br/>
            <a href="https://youtu.be/FdSeyi40gGU">Video</a>
          </p>
         <h3>Desarrollador</h3>
          <p>
            Bull MotorCar <br/>
            Fechas: Jun. 2013 – Oct. 2013<br />            
            - Desarrollo de aplicación para la administración del taller (proveedores, stock, clientes).<br />
            - Tecnologías: VisualBasic <br/>
          </p>
         <h3>Analista Funcional en Banca</h3>
          <p>
            Experis <br/>
            Fechas: Ene. 2010 – Jun. 2013<br />            
            - Equipo Adquirencia ISBAN.<br />
          </p>
         <h3>Analista Organico en Banca</h3>
          <p>
            Oesia <br/>
            Fechas: Dic. 2007 – Oct. 2009<br />            
            - Cliente Infocaja<br />
          </p>
         <h3>Analista-programador en Banca</h3>
          <p>
            Axpe-Consulting <br/>
            Fechas: Dic. 2006 – Dic. 2007<br />            
            - Cliente Infodesa<br />
          </p>
         <h3>Consultor Junior</h3>
          <p>
            Everis <br/>
            Fechas: Oct. 2005 – Oct. 2006<br />            
            - Cliente Mapfre<br />
          </p>
          <button className="button-right" onClick={() => {this.props.onCloseArticle()}} >Close</button>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03}   alt="" /></span>
          <p>Soy un ingeniero informático apasionado por el desarrollo.
            Los ultimos años me he centrado en el desarrollo web y apps. Domino javascript y mis frameworks favoritos son angular y react. <br />
            En cuanto al desarrollo en moviles, me declino por Android, y como lenguaje de desarrollo kotlin
        </p>
        <button className="button-right" onClick={() => {this.props.onCloseArticle()}} >Close</button>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
        {/*   <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <ul className="icons">
            <li><a href="https://twitter.com/erubiosa" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/enriquerubiosanchez/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/wooltar#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          <button className="button-right" onClick={() => {this.props.onCloseArticle()}} >Close</button>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
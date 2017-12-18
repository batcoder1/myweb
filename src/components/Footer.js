import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Licencia MIT. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
        <p className="copyright">Foto: Spencer Watson</p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer

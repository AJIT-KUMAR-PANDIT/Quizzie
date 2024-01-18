import CssLogo from './Logo.module.css'

const Logo = ({size}) => {

    const logoVar={
        fontSize:`${size}`,
    }
    
  return (
    <>

    <div className={CssLogo.logo} style={logoVar}>QUIZZIE</div>
    </>
  )
}

export default Logo;
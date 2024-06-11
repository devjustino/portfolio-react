import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {

  return (

    <div className="header">

        <div className="welcome">
            <div className="self-container">
                <div className="self">
                    <img src="./src/assets/image/portfolioimg1.png" alt="" />
                </div>
                <div className="languages">
                    <span><img src="./src/assets/image/flagBrasil.png" alt="" /> PT-BR nativo </span>
                    <span><img src="./src/assets/image/flag-us.png" alt="" /> EN intermediário </span>
                </div>
            </div>

            <div className="welcome-container">
                <h1>Seja bem-vindo ao meu primeiro website!</h1>
                <h2>Desenvolvedor web front-end</h2>
                <h2>Estudando desenvolvimento full-stack</h2>
                <p className="m-7 text-gray-500 text-sm">Cursando Análise e Desenvolvimento de Sistemas - Término em 2025</p>
            </div>   
        </div>

        {/* SCORES */}
        <div className="scores">
            <div className="score-language">
                <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="Html"
                width={40}
                />
                <div className="scores-unit">
                    <div className="scores-measure scores-3">
                        <span>1 ano +</span>
                    </div>
                </div>
            </div>

            <div className="score-language">
                <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="Css"
                width={40}
                />
                <div className="scores-unit">
                    <div className="scores-measure scores-3">
                        <span>1 ano +</span>
                    </div>
                </div>
            </div>

            <div className="score-language">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="Javascript"
                width={40}
                />
                <div className="scores-unit">
                    <div className="scores-measure scores-2">
                        <span>1 ano -</span>
                    </div>
                </div>
            </div>

            <div className="score-language">                        
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                width={40}
                />
                <div className="scores-unit">
                    <div className="scores-measure scores-2">
                        <span>1 ano -</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="btn-container">
            <a href="http://mailto:contatodevjustino@gmail.com"> <FontAwesomeIcon icon = {faEnvelope} className="h-10 max-lg:w-5"/> </a>
            <a href="https://github.com/devjustino"><FontAwesomeIcon icon = {faGithub} className="h-10 max-lg:w-5"/></a>
            <a href="http://www.linkedin.com/in/rafael-justino-b04303222/"><FontAwesomeIcon icon = {faLinkedin} className="h-10 max-lg:w-5"/></a>
        </div>

    </div>

  )

}

export default App


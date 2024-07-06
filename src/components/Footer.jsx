/* eslint-disable react/no-unknown-property */
const Footer = () => {
  return (
    <p  xmlns:cc="http://creativecommons.org/ns#">
          This work is licensed under {''}
        
      <a
        href="https://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1"
        target="_blank"
        rel="license noopener noreferrer"
        style={{ display: 'inline-flex'}}
      >
              CC BY-ND 4.0
        <span style={{ display: 'inline-flex', alignItems: 'center'}} >
          <img
            style={{
              height: '22px',
              marginLeft: '10px',
              verticalAlign: 'text-bottom'
            }}
            src = 'https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1'
            alt='CC'
          />
          <img 
            style={{
              height: '22px',
              marginLeft: '3px',
              verticalAlign: 'text-bottom '
            }}
            src='https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1'
            alt ='BY'
          />
        </span>
      </a>    
    </p>
  )
}
export default Footer
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Route } from 'react-router';
import './body.css'
import logo2 from '../assets/logo2.jpeg'
import sample1 from '../assets/sample1.png'
import eindustries from '../assets/eindustries.png'
import eerrand from '../assets/eerrand.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import Resume from '../assets/O.AroyehunCV.pdf'
import Resumeimage from '../assets/cv.png'

function Body(){
    return(
        <div >
            <Container>
                <div className='row' >
                    <div className='col-2' id='body' >
                        <div>
                            <h3 style={{ fontFamily:'Libre Baskerville', marginBottom:'15px'}}>My Skills</h3>
                            <div className='language'><span>Python</span><br/></div>
                            <div className='language'><span>Flask</span><br/></div>
                            <div className='language'><span>AWS</span><br/></div>
                            <div className='language'><span>React</span><br/></div>
                            <div className='language'><span>JScript</span><br/></div>
                            <div className='language'><span>MySql</span><br/></div>
                            <div className='language'><span>HTML</span><br/></div>
                            <div className='language'><span>CSS</span><br/></div>                            
                        </div>
                        <div class="line-1" id='line'></div>
                        <div id='secondSkills' >
                            <h3 style={{ fontFamily:'Libre Baskerville',  marginBottom:'15px'}} id='expereinece'>Experience </h3>
                            <div className='language'><span>FinTech</span><br/></div>
                            <div className='language'><span>FMCG</span><br/></div>
                            <div className='language'><span>Startups</span><br/></div>
                            
                        </div>
                    </div>

                    <div className='col-6' id='contents'>
                        <img src={logo2} alt='myimage' id='imageTop'/>
                        <div id='words'>
                        <h1 id='topics'>Hi there! I am <br/> Aroyehun Segun</h1>
                        <p id='secondtopic'>I am a passionate product developer focused on improving the usability of digital products. 
                            I have an excellent reputation for solving problems, improving customer satisfaction and
                             knowledgeable in Market ready Applications.  
                        </p>
                        <h3 id='subtopic'>Let's work on your next project</h3>
                        
                        <a href={Resume} download='Oluwasegun Resume' target='_blank' rel="noreferrer"> <span className='othertopics' > <img src={Resumeimage} alt='myimage4' id='resume'/> <br/> Download my Resume</span> <br/> </a>
                        
                        <div id='iconsss'>
                        <span className='othertopics'> <a href='www.google.com'>  <img src={twitter} alt='myimage2' id='icons'/></a>  </span> | <span className='othertopics'><img src={github} alt='myimage2' id='icons'/></span> | <span className='othertopics'><img src={linkedin} alt='myimage2' id='icons'/></span>
                        </div>
                  

                        </div>
                        
                    </div>
                
                    <div className='col-4' id='samplejobs'>
                        
                        <div >
                        <div id='number1'>
                            01
                        </div>
                        <div class="line-1"  id='line2'></div>
                        <h4 id='header2'>Developed an Event App for Temple Company. </h4>
                        <div class="line-1" id='line3'></div>
                        <span id='firstapp'>Designed EnjoyLife event app for Temple Company.</span>
                        
                        <img src={eindustries} alt='myimage2' id='sample1'/>

                        <a href='enjoylife.ng'> <span className='othertopics' > www.enjoylife.ng</span> <br/> </a>



                        </div>

                         {/* second dev */}


                         <div>
                        <div id='number1'>
                            02
                        </div>
                        <div class="line-1"  id='line2'></div>
                        <h4 id='header2'>Developed a Web-App for eIndustries Technologies. </h4>
                        <div class="line-1" id='line3'></div>
                        <span id='firstapp'> This is the official website of eIndustries.</span>
                        
                        <img src={sample1} alt='myimage2' id='sample1'/>


                        <a href='www.eindustries.tech'> <span className='othertopics' > www.eindustries.tech</span> <br/> </a>


                        </div>


                        {/* second div */}


                        <div>
                        <div id='number1'>
                            03
                        </div>
                        <div class="line-1"  id='line2'></div>
                        <h4 id='header2'>Developed a FinTech App for eErrand Limited  </h4>
                        <div class="line-1" id='line3'></div>
                        <span id='firstapp'>  FinTech App (Goodle Map & Wallet embeded).</span>
                        
                        <img src={eerrand} alt='myimage2' id='sample1'/>

                        <a href='www.eerrand.net'> <span className='othertopics' > www.eerrand.net</span> <br/> </a>


                        </div>

                        {/* third dev */}

                        

                        
                        

                    </div>
               

                </div>
            </Container>
            

            

        </div>
    )
}

export default Body;
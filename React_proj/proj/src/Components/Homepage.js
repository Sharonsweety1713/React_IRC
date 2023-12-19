import Footer from '../Components/Footer'
import '../Asserts/css/Footer.css'
const  Homepage=()=>
{
    return(
		<>
    <div className="front">
    <div className="transparent-box">
    <h1 className="box-text">Hire the best freelancers for any job, online</h1>
  <h3>Freelance Your Future</h3>
  </div>
 </div>
         <div className="side-cards-section">
      <ul className="side-cards-list">
        <li className="side-card">
          <div
            className="side-card__image fade"
            style={{
              backgroundImage: 'url(https://darvideo.tv/wp-content/uploads/2021/09/Demo-animated-video.jpg)',
            }}
            title="side-card-image"
          ></div>
          <div className="side-card__text__container">
            <div className="side-card__text">
              <h2 className="side-card__text__title">Make it real with Wander Weavers</h2>
              <div className="side-card__text__caption">
              <h6 className="side-card__text__pre-title">The Best talent</h6>
                <p>Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.</p>
              <h5 className="side-card__text__pre-title">Quality work</h5>
                <p>With Wander Weaver's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done.</p>
              <h5 className="side-card__text__pre-title">Fast bids</h5>
                <p>Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.</p>
              
              </div>
            </div>
          </div>
        </li>
        <li className="side-card side-card__image--right">
          <div
            className="side-card__image fade"
            style={{
              backgroundImage: 'url(https://img.freepik.com/premium-vector/working-freelance_118813-2635.jpg)',
            }}
            title="side-card-image"
          ></div>
          <div className="side-card__text__container">
          <div className="side-card__text">
              <h2 className="side-card__text__title">Tap into a global talent network</h2>
              <div className="side-card__text__caption">
              <h6 className="side-card__text__pre-title">Post your job</h6>
                <p>It's free and easy! Get lots of competitive bids that suit your budget in minutes. Start making your dreams reality.</p>
              <h5 className="side-card__text__pre-title">Choose freelancers</h5>
                <p>No job is too big or complex. We've got freelancers for jobs of any size or budget, across 2700+ skills. Let our talent bring your ideas to life.</p>
              <h5 className="side-card__text__pre-title">We're here to help</h5>
                <p>Your time is precious. Let our team of expert recruiters and co-pilots save you time finding talent, even managing your job if needed.</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="side-cards-section">
      <ul className="side-cards-list">
        <li className="side-card">
          <div
            className="side-card__image fade"
            style={{
              backgroundImage: 'url(https://videoigniter.com/wp-content/uploads/2022/10/Working-with-your-animation-studio-to-create-a-custom-animated-video.png)',
            }}
            title="side-card-image"
          ></div>
          <div className="side-card__text__container">
          <div className="side-card__text">
              <h2 className="side-card__text__title">Get your business ready for AI</h2>
              <div className="side-card__text__caption">
              <h6 className="side-card__text__pre-title">Top AI specialists</h6>
                <p>Unlock access to thousands of AI specialists across every technology. Ensure your business thrives in the new AI-powered world.</p>
              <h5 className="side-card__text__pre-title">Get better results</h5>
                <p>Our freelancers are supercharging their workflows with AI. Evolve your business by combining the best of AI and human talent.</p>
              <h5 className="side-card__text__pre-title">AI makes it easy</h5>
                <p>Attracting top talent has never been so easy. Just tell us what you need done and our advanced AI will help guide you through the process.</p>
              </div>
            </div>
          </div>
        </li>
        <li className="side-card side-card__image--right">
          <div
            className="side-card__image fade"
            style={{
              backgroundImage: 'url(https://img.freepik.com/premium-vector/competitive-process-business-business-people-run-their-goal-hurry-each-step-way-achieve-goal-move-up-motivation-employee-victory-companies-competition_458444-1098.jpg?w=2000)',
            }}
            title="side-card-image"
          ></div>
          <div className="side-card__text__container">
          <div className="side-card__text">
              <h2 className="side-card__text__title">Power your organisation</h2>
              <div className="side-card__text__caption">
              <h6 className="side-card__text__pre-title">Flexible Workforce</h6>
                <p>Hire freelancers and increase flexibility in scaling your workforce up or down based on project requirements.</p>
              <h5 className="side-card__text__pre-title">Specialized Skills</h5>
                <p>Acess specialized skills, for your organization to stay at the forefront of industry trends and advancements.</p>
              <h5 className="side-card__text__pre-title">Time Savings</h5>
                <p>Finding the right talent can be time-consuming.Wander Weavers streamline this process, helping you quickly identify and engage with skilled professionals.</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Footer/> 
    </>
		)
}
export default Homepage
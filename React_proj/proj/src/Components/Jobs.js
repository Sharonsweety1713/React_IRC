import React from 'react';
// import './test.css'; // Assuming your stylesheet is named test.css

const Jobs = () => {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="test.css" />
        <title>4 same chart card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </head>
        <div className='full'>
      <body>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='stripe'>
        <h1 >FIND YOUR JOB</h1>
        </div>
        <br/>
        <br/>
        <br/>
        <h1 className='spel'>WEB DEVELOPMENT</h1>
        <br/>
        <br/>
        <br/>
        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
              <img src="data:image/png;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              We are seeking an experienced full-stack web developer to join our project on a freelance basis. The ideal candidate should have proficiency in both front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and database management.
          <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
          
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/png;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              We are looking for a skilled web developer specializing in WordPress to customize and enhance our website. The freelancer should also have expertise in plugin development.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/png;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              We have an exciting opportunity for a freelance web developer with experience in e-commerce website development. The ideal candidate should be proficient in platforms such as Shopify and Magento.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="job_card">
             <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://companieslogo.com/img/orig/ACN_BIG.D-871a76ce.png?t=1633439499" alt="Chart" />
              </div>
              <div className="job_test_text">
              We are in need of a talented front-end developer with expertise in React.js to join our project on a freelance basis. The candidate should have a strong understanding of React.js, JSX, and state management libraries. Proficiency in web technologies such as HTML5, CSS3, and responsive design is essential.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </body>
      <body>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className='spel'>ANDROID DEVELOPMENT</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/png;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              We are seeking an Android app developer to collaborate on our mobile application project. The freelancer should have a strong command of Java or Kotlin and a proven track record of developing user-friendly Android apps.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/rvueyqqbwvwpqje4fyhz" alt="Chart" />
              </div>
              <div className="job_test_text">
              We are looking for a freelance Android developer with a focus on UI/UX design to enhance the visual appeal of our mobile app. The candidate should have a strong design sense and expertise in Android UI/UX guidelines
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-pgKFm37p8BmPNK3FznIOSCtpd8yxfDgbypK6-A5z8rdLTAUp1SfLY94Hs_eHuJywbM&usqp=CAU" alt="Chart" />
              </div>
              <div className="job_test_text">
              We have an exciting freelance opportunity for an Android app developer with expertise in React Native. The candidate should have hands-on experience in building cross-platform mobile applications and integrating APIs
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="job_card">
             <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_14f248c3225e54f0afa1562ee68b895b/appster.png" alt="Chart" />
              </div>
              <div className="job_test_text">
              We have an immediate need for a freelance Android developer with expertise in integrating Firebase services into mobile applications. The ideal candidate should have hands-on experience with Firebase Authentication
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </body>
      <body>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className='spel'>INTERIOR DESIGING</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/jpeg;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              We're seeking a creative mind adept at blending functionality with aesthetics, delivering cutting-edge designs that reflect the latest trends. If you have a keen eye for detail and can turn ordinary spaces into extraordinary experiences, apply now!
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://media.licdn.com/dms/image/D560BAQF_-cdbjy9lnQ/company-logo_200_200/0/1666187602866/studio_munge_logo?e=2147483647&v=beta&t=wm0m7B6D7U8FGO2pOO5oVB-5qN7TozUxbj_9jZmY3_M" alt="Chart" />
              </div>
              <div className="job_test_text">
              Calling all interior design enthusiasts who thrive on eclecticism and unique style combinations! We're looking for freelancers who can infuse spaces with a vibrant blend of textures, colors, and cultural influences.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD////8/PwEBAS6urr5+fnBwcHm5uYmJibt7e04ODiMjIx0dHRkZGT29vYICAiwsLDR0dHh4eGhoaGFhYUVFRWVlZXIyMguLi5ra2vOzs5ERERfX197e3s+Pj4PDw9SUlJYWFhKSkoeHh6lpaXZ2dkyMjJzyLzQAAAIOUlEQVR4nO2cDXviKBDHgUjTqCW+21Rtrdb9/h/xZgawkkYbCe265/x6T5891xD+zDAMA3dCMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAyThPnDkVEpsiwrU7UMLT0+RNKbbobrR9uMKKFXGf4hrhtiJo1WEtByBL2KbKex6fIg41HK5JPFsE9NxQtEpkpralGbAbWVjJFU0fII+FM+XqygqXjPQkU9aaAt0KnlO7pEKoELqbuY0P7Cnh1mmYgfe3iuzNGA1Jp57uINJ61Cf9aum13wzxfTOTUa1Tl4al5I5cZsMk/iqGUpXk13gV4nNGQWGLuiJT5p6g1a8qG7PGxTPB6gtTQCcQLBcB3eY6cjDsvATRmQOU2gD5p8iI4yTRJx7KUexEVU+8zUdgiakcNOkZmaLMVImYQKsWP4M4rvkhBLHChDHvHaUWKGi6zWTQp1S8uSoPpX4YNldEzNxNvEvRyizXMXfbDeiB2GZtdc2MWWFlOKBqP2faPlg4j0VHgIYp8f9mUHfRjR+wVq0ahSnZpSFdX66TJVNRu9LHPQIsNnvfCP2G7BwAy9YykV7+/YVPmivEId2E3DWtSukdXTdIxN1GyrFYaJGD8tKe8b+DFTcnB9G7ZrGGUeKEdCbfk4UKjyx2s6NRiHTo5ua1TRj+wbMnKeBSO1jVx7QODUe7sy2zAzvU4hsBujpsDRlYxfsWH8lzZCgDMUr7HxdOiDjJYbSHnjFZIzDnOplTpxBOjdOrJrOBXfDEUwXMsO+7h2dpB+uOnzIboopB1TKfqHMODYJSMO3Py+Y/4NTeo4Z8BFR6GnY19ewM87KqSV4SBPp6OGn06rWSW1oZiK++HyKjOiE4ixG2itcvysF4TCq+ehZQJ9Og036BzRKUkGccIYl4QPr9osUjgeHRf6ySt+mEBhJl6LwBO0LES8xIwCKroqGvL9iqWHBMKe12Xw+on6kMSGmDSH4XTVwYbgahNlZ6LCDl21ZLxLG2UULqhZKoWZ2OcqkCgjNxmeZ+gmWhBaHbvZ1YYSHrS5O/yaCq+w03roWcjAhriJ7bQ32BobDUFlzyaardhP3Eqo7RYgnZeKVbjoq8NbXDtHZrYEhDU4TN9aKlwq5SoFh7nNdBMppI1P2M6fTjbMhEu80CQQMcoWcxGf8amMKlZHyyeyIaS6IdvIdj55oXUHFZp9CyNmtJBq+4ysPp9IMQ9xsBbhSMnYxM0DRit8HqHyfZu5uMVyq924bk7WmFQ2DBVK+RTZjgOnUN84p6P07aJCzPZgUdauTP0hbl+hsPth4zwC+nxxJoKetwOJA5+W46CScqsKaR75AiNo3FxcFUFQzx19aDXZBwa/XYU2fXN+qtXq8lcX0u4rlTS1fCrRig/DHbKObCfsN+wTtC16YuWg2YZ0lFBhXQwTPf1lc5rGhrgfCNpJoRB7vi/c5hP2w+eSCPjaFsZB2aOrmSh/QiGtXqfoXWQ7p2Sw0L8bu1UAD+yd+5p4nth1QtOXsh9ROM9DhTDbO4NZFwRU6RMxuTj3TUoOqHz18nVZSTIPM7Gr1dwwLYxpqaHpBR6BU3W2IY2gQSANJLGpGJpk93SysXbTcJRIoHDnw1R9k3r7VWImZjaGQqgpdg2vTeOlq1pFEeZ7IjKqA1k3hR1DQ/fWdgAUhbeGvCCNwpE8VQjv63aw8gkt83/AS20Jm3Z94d8/F+6USMM8bXKcJHWaKjxrVXISKegM79qmqJrc38mwEWV+sOdD6uxJR8dIQ297LMJJqCnqJbtPAVn1hmqUVJvaHJcDKjQujQu0mI020sGGvlzaz2tnUNq0PN9p/6KpDSWSqm/+0yw7OaCYnNtzd/FSO5ZVLk8LwuiwySKpfxHusLW25f78eBsFF0t7HKd1cTbF6GRDeNO8Z+gY8SgRgoKJPlI59yZorsCjDNCo5cvx8xUkPNZLIdM/t4HsOA8HBUXRk3kIIz1Ne3ELwZjptxmwH7ZFJjzndVC1qq2Xtu/csCdrtwGojHtIpKpGdTweVlMyWHmQ/iD60oFxoFDpdmG+7O+q6YMJ5p8X+M1OLhbcD7s7U/B7SJtH7a/7wbbjvF1qCs1y+c21y+VyOZ4UhtLALzcbsIzb/S7MOUbWhPAPHjMPXJZxGnu+VSgbL6A0oQwVa5svKiSfhQilby7/NDLfr+2mHgX3L5apapHm+wsn/itfbpooJzDy9l4b5hN53A/nWrmz4urymPYaRERBxUq96XDPtAW7wkcbu0rgoC6wIv4bCnEPV2x/bA4Smdgo50V0NOV2/tmvKMSg3XtMekm7SSHW1JS7cUY3bse+FnBBYff7e/ZawWEdf4W2rULa0H+ui0YV359x1W14lV476zG8yXH03dLrJEJA1a5ODI5ar422Udj68p5bDunbeW8rfmiRCAXarYwfWa3bXDDrfen39wqV8pMB/qWYfFSP4mcjzFEh5aOVu4pAB9nfS6zlNO3s5yiK8WLTP777FyAjPhfeGJX97DJBpIF0aDFowWy2qdbbY/6ZuZ/fgK6O+v4O2zxR89K2ty+Dl17/SCe8QhWjML6q/4vcj8LWXhrEzn9JIdvQwQpvEFZYI9U5/i/CNqzBCm8Qnoc17sGGrPDmYIU1ONLcIKywxj0o5Hl4c7DCGqzwBuFIU+MebMgKbw6ehzXuwYas8Oa4n3n4vz9dU60VBv9vmX9IYSsvzbrdgv5LdPbSm1f4p+fvK7f6zzgH4R3n0T/gpQzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAxzT/wHOnZUFt6Odu4AAAAASUVORK5CYII=" alt="Chart" />
              </div>
              <div className="job_test_text">
              Are you passionate about sustainable design practices ?Our freelance platform is seeking interior designers committed to incorporating green principles into their projects.Join us!.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="job_card">
             <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/png;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              Embrace the future of interior design by joining our platform as a tech-savvy smart space stylist. We're seeking freelancers who can seamlessly integrate cutting-edge technology into their designs, creating homes that are as intelligent as they are beautiful.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </body>
      <body>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className='spel'>DATA SCIENCE</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://analyticsdrift.com/wp-content/uploads/2022/06/datarobot-now-available-on-google-cloud-marketplace.jpg" alt="Chart" />
              </div>
              <div className="job_test_text">
              We're on the lookout for professionals who can work their magic with algorithms, turning data sets into information. If you're passionate about predicting trends and making data-driven decisions, apply now!
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/png;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              Calling all machine learning enthusiasts! We're seeking freelance data scientists who are experts in machine learning algorithms and models. If you have a proven track record of developing and deploying ML solutions, Grab the opportunity. 
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://store-images.s-microsoft.com/image/apps.1296.2af832b6-cd5f-4795-8f68-6bcd61fe2c0f.e74a2e72-4a98-4c30-b89d-1ecd4bb11bc8.786662a7-e5d4-4f0c-9b51-92caf66911ff" alt="Chart" />
              </div>
              <div className="job_test_text">
              If you have experience with tools like Tableau, Power BI, or D3.js and can transform data into visually stunning and easily understandable presentations, apply now. Help clients uncover the stories hidden in their data.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="job_card">
             <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://yt3.googleusercontent.com/ytc/APkrFKbElD-TecvTFmI-D3audaWj8SVZSyinLo4uMkTlHA=s900-c-k-c0x00ffffff-no-rj" alt="Chart" />
              </div>
              <div className="job_test_text">
              We're looking for professionals who can navigate the complex landscape of data ethics, ensuring responsible and fair use of data in AI applications. If you have a strong ethical framework and can guide clients in building transparent and accountable data processes, apply now!
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </body>
      <body>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className='spel'>DIGITAL MARKETING</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1493944425/vslx1ziwf3kwyswls8vv.png" alt="Chart" />
              </div>
              <div className="job_test_text">
              Are you a social media guru with a knack for creating engaging content and building online communities?We're looking for individuals who can craft compelling social media strategies, manage campaigns across platforms, and analyze performance metrics. 
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://secure.gravatar.com/avatar/c20a3c2edbaa9be03ac17d54fd5eb4c5?s=96&d=https%3A%2F%2Fwww.webfx.com%2Fwp-content%2Fthemes%2Ffx%2Fassets%2Fimg%2Ffx-gravatar.jpeg&r=g" alt="Chart" />
              </div>
              <div className="job_test_text">
              Unlock the secrets of search engine optimization (SEO) and content marketing as a freelance digital marketing wizard. We're seeking individuals who can optimize website content, conduct keyword research, and drive organic traffic through strategic SEO techniques
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="job_card_row">
          <div className="job_card">
           <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="https://logopond.com/logos/0a69324d282f2a4b70281bef3ec900cb.png" alt="Chart" />
              </div>
              <div className="job_test_text">
              If you're adept at crafting personalized and effective email strategies, apply now to collaborate on projects ranging from lead generation to customer retention and help clients achieve their email marketing goals.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="job_card">
             <div className="job_card_row2">
              <div className="job_test_chart">
                <img src="data:image/jpeg;base64,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" alt="Chart" />
              </div>
              <div className="job_test_text">
              Join our freelance platform as a digital advertising expert. We're seeking individuals with a deep understanding of advertising platforms like Google Ads, Facebook Ads, and more.
                <button className="apply">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </body>
      </div>
    </html>
  );
};

export default Jobs;

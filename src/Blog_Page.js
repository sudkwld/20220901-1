import Footer from './Footer.js';
import './Blog_css.css';

import {BiSearch} from 'react-icons/bi'

function Blog_Page() {
  return (
    <>
      <div className="blog-wrap">
        <div className='blog-bg' style={{ backgroundImage: 'url(/img/page-header-bg.jpg)' }}>
          <h3>Blog Classic</h3>
          <span>Blog</span>
        </div>
        <div className='blog-index'>
          <ul>
            <li>Home</li>
            <li>&gt;</li>
            <li>Blog</li>
            <li>&gt;</li>
            <li>Classic</li>
          </ul>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='article-container'>
                <div className='article-img'>
                  <img src='img/blog1.jpg' alt='blog' />
                </div>
                <ul className='blog-user-index'>
                  <li>by <span>John Doe</span></li>
                  <li>|</li>
                  <li><span>August 3, 2021</span></li>
                  <li>|</li>
                  <li><span>2 Comments</span></li>
                </ul>
                <h3>HANDMADE PIECES THAT TOOK TIME TO MAKE</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                  magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                  erat.</p>
                <blogckquote>“Lorem ipsum dolor sit amet, consetetur sadi pscing elitr
                  , sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                  aliquyam erat.”
                </blogckquote>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                  duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                  sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                  eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                  accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum 
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                  elitr.</p> 
                <div className='article-box'>
                  <div className='more-furniture'>
                    <img src='img/blog2.jpg' alt='blog'/>
                    <p>Est velit etlaborio sam or est inventore quo numquam Labore 
                      voluptas nihil molestiae sint delectus sint sequi voluptatem. 
                    </p>
                  </div>
                  <div className='more-furniture'>
                    <img src='img/blog3.jpg' alt='blog'/>
                    <p>Est velit etlaborio sam or est inventore quo numquam Labore 
                      voluptas nihil molestiae sint delectus sint sequi voluptatem. 
                    </p>
                  </div>
                </div>
                <div className='article-text'>
                  <h3>Labore volup tas nihil molestiae sint delectus</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et 
                    lorem dolor null accusam et justo duo dolores et ea rebum. 
                    Stet clita kasd gubergren, no sea takimata sanctus est 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam 
                    voluptua. At vero eos et accusam et justo duo dolores et ea 
                    rebum. Stet clita kasd gubergren, no sea takimata sanctus 
                    est Lorem ipsum dolor sit amet. sed diam voluptua. 
                    tempor invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos et accusam et justo 
                    duo dolores et ea rebum.</p>
                </div> 
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='blog-side-box'>
                <input type='search' placeholder='Search...'/>
                <span className='blog-mag'><BiSearch/></span>
              </div>
              <div className='blog-side-box'>
                <table>
                  <tbody>
                    <th>Categories</th>
                    <tr>
                      <td>Lifestyle</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Shopping</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Fashion</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Travel</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Hobbies</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='blog-side-box'>
                <h3>Popular Posts</h3>
                <ul className='blog-posts'>
                  <li>
                    <figure>
                      <img src='img/side1.jpg' alt='post'/>
                    </figure>
                    <div className='post-txt'>
                      <h4>Aliquam tincidunt mauris eurisus.</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side2.jpg' alt='post'/>
                    </figure>
                    <div className='post-txt'>
                      <h4>Cras ornare tristique elit.</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side3.jpg' alt='post'/>
                    </figure>
                    <div className='post-txt'>
                      <h4>Vivamus vestibulum ntulla nec ante.</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side4.jpg' alt='post'/>
                    </figure>
                    <div className='post-txt'>
                      <h4>Donec quis dui at dolor tempor interdum.</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img src='img/side5.jpg' alt='post'/>
                    </figure>
                    <div className='post-txt'>
                      <h4>Colorful office redesign</h4>
                      <h5>August 3, 2021</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='blog-side-box'>
                <h3>Browse Tags</h3>
                <div className='browse-tags'>fashion</div>
                <div className='browse-tags'>style</div>
                <div className='browse-tags'>fresh</div>
                <div className='browse-tags'>photography</div>
              </div>
              <div className='blog-side-box'>
                <h3>About Blog</h3>
                <p>Vestibulum volutpat, lacus a ultrices sagittis, 
                  mi neque euismod dui, pulvinar nunc sapien ornare nisl.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog_Page;
import React, { Component } from 'react'

export default class Sidebar extends Component {

    render() {

        return (
            <div className="secondary col-md-4 col-sm-12 col-xs-12">
                <aside className="info aside section">
                    <div className="section-inner">
                        <h2 className="heading sr-only">Basic Information</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="fa fa-map-marker"></i><span className="sr-only">Location:</span>San Francisco, US</li>
                                <li><i className="fa fa-envelope-o"></i><span className="sr-only">Email:</span><a href="#">jameslee@website.com</a></li>
                                <li><i className="fa fa-link"></i><span className="sr-only">Website:</span><a href="#">http://www.website.com</a></li>
                            </ul>
                        </div>

                    </div>

                </aside>


                <aside className="skills aside section">
                    <div className="section-inner">
                        <h2 className="heading">Skills</h2>
                        <div className="content">
                            <p className="intro">
                                Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link
                                to your Linkedin or Coderwall profile so people can get more info there.</p>

                            <div className="skillset">

                                <div className="item">
                                    <h3 className="level-title">Python &amp; Django<span className="level-label" data-toggle="tooltip" data-placement="left"
                                        data-animation="true" title="You can use the tooltip to add more info...">Expert</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="96%">
                                        </div>
                                    </div>

                                </div>


                                <div className="item">
                                    <h3 className="level-title">Javascript &amp; jQuery<span className="level-label">Expert</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="96%">
                                        </div>
                                    </div>

                                </div>


                                <div className="item">
                                    <h3 className="level-title">HTML5, CSS3, SASS &amp; LESS<span className="level-label">Expert</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="96%">
                                        </div>
                                    </div>

                                </div>


                                <div className="item">
                                    <h3 className="level-title">Ruby on Rails<span className="level-label">Pro</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="85%">
                                        </div>
                                    </div>

                                </div>


                                <p><a className="more-link" href="#"><i className="fa fa-external-link"></i> More on Coderwall</a></p>
                            </div>
                        </div>

                    </div>

                </aside>


                <aside className="testimonials aside section">
                    <div className="section-inner">
                        <h2 className="heading">Testimonials</h2>
                        <div className="content">
                            <div className="item">
                                <blockquote className="quote">
                                    <p><i className="fa fa-quote-left"></i>James is an excellent software engineer and he is passionate
                                        about what he does. You can totally count on him to deliver your projects!</p>
                                </blockquote>
                                <p className="source"><span className="name">Tim Adams</span><br /><span className="title">Curabitur commodo</span></p>
                            </div>


                            <p><a className="more-link" href="#"><i className="fa fa-external-link"></i> More on Linkedin</a></p>

                        </div>

                    </div>

                </aside>


                <aside className="education aside section">
                    <div className="section-inner">
                        <h2 className="heading">Education</h2>
                        <div className="content">
                            <div className="item">
                                <h3 className="title"><i className="fa fa-graduation-cap"></i> MSc Psychology and Computer Science</h3>
                                <h4 className="university">University College London <span className="year">(2011-2012)</span></h4>
                            </div>

                            <div className="item">
                                <h3 className="title"><i className="fa fa-graduation-cap"></i> BSc Computer Science</h3>
                                <h4 className="university">University of Bristol <span className="year">(2008-2011)</span></h4>
                            </div>

                        </div>

                    </div>

                </aside>


                <aside className="languages aside section">
                    <div className="section-inner">
                        <h2 className="heading">Languages</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li className="item">
                                    <span className="title"><strong>English:</strong></span>
                                    <span className="level">Native Speaker <br className="visible-xs" /><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span>
                                </li>

                                <li className="item">
                                    <span className="title"><strong>Spanish:</strong></span>
                                    <span className="level">Professional Proficiency <br className="visible-sm visible-xs" /><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half"></i></span>
                                </li>

                            </ul>
                        </div>

                    </div>

                </aside>


                <aside className="blog aside section">
                    <div className="section-inner">
                        <h2 className="heading">Latest Blog Posts</h2>
                        <p>You can use Sascha Depold's <a href="https://github.com/sdepold/jquery-rss" target="_blank">jQuery RSS plugin</a>                            to pull in your blog post feeds.</p>
                        <div id="rss-feeds" className="content">

                        </div>

                    </div>

                </aside>


                <aside className="list music aside section">
                    <div className="section-inner">
                        <h2 className="heading">Favourite coding music</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="fa fa-headphones"></i> <a href="#">Etiam hendrerit urna nunc</a></li>
                                <li><i className="fa fa-headphones"></i> <a href="#">Ut sollicitudin in mauris non auctor</a></li>
                                <li><i className="fa fa-headphones"></i> <a href="#">Etiam hendrerit urna nunc</a></li>
                                <li><i className="fa fa-headphones"></i> <a href="#">Duis et felis bibendum</a></li>
                            </ul>
                        </div>

                    </div>

                </aside>


                <aside className="list conferences aside section">
                    <div className="section-inner">
                        <h2 className="heading">Conferences</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="fa fa-calendar"></i> <a href="https://developer.apple.com/wwdc/" target="_blank">WWDC 2014</a>                                    (San Francisco)</li>
                                <li><i className="fa fa-calendar"></i> <a href="http://hive.aigaseattle.org/">Hive</a> (Seattle)</li>
                            </ul>
                        </div>

                    </div>

                </aside>


                <aside className="credits aside section">
                    <div className="section-inner">
                        <h2 className="heading">Credits</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><a href="http://getbootstrap.com/" target="_blank"><i className="fa fa-external-link"></i> Bootstrap</a></li>
                                <li><a href="http://fortawesome.github.io/Font-Awesome/" target="_blank"><i className="fa fa-external-link"></i> FontAwesome</a></li>
                                <li><a href="http://jquery.com/" target="_blank"><i className="fa fa-external-link"></i> jQuery</a></li>
                                <li><a href="https://github.com/IonicaBizau/github-calendar" target="_blank"><i className="fa fa-external-link"></i> GitHub Calendar Plugin</a></li>

                                <li><a href="http://caseyscarborough.com/projects/github-activity/" target="_blank"><i className="fa fa-external-link"></i> GitHub Activity Stream</a></li>

                                <li><a href="https://github.com/sdepold/jquery-rss" target="_blank"><i className="fa fa-external-link"></i> jQuery RSS</a></li>

                                <li>Profile image: <a href="https://www.flickr.com/photos/dotbenjamin/2577394151" target="_blank">Ben Smith</a></li>
                                <li>iPad and iPhone mocks: <a href="https://dribbble.com/perlerar" target="_blank">Regy Perlera</a></li>

                            </ul>

                            <hr />

                            <p>This responsive portfolio template is handcrafted by UX designer <a href="https://www.linkedin.com/in/xiaoying"
                                target="_blank">Xiaoying Riley</a> at <a href="http://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a>                                for developers and is <strong>FREE</strong> under the <a className="dotted-link" href="http://creativecommons.org/licenses/by/3.0/"
                                    target="_blank">Creative Commons Attribution 3.0 License</a></p>
                            <p>We will improve or add new features to this template based on users' feedback so follow us on
                                twitter to get notified when a new version is out!</p>
                            <a className="btn btn-cta-secondary btn-follow" href="https://twitter.com/3rdwave_themes" target="_blank"><i className="fa fa-twitter"></i> Follow us</a>
                            <a className="btn btn-cta-primary btn-download" href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/"
                                target="_blank"><i className="fa fa-download"></i> I want to download</a>
                        </div>

                    </div>

                </aside>


            </div>
        )

    }

}
import React from 'react';
import Footer from "../components/Footer";

const Faq = () => {
    document.title = 'Travian Bot & elephants, croppers, oases finder';
    return (
        <div className="container">
                    <h2 className="section-heading">Travian bot FAQ</h2>
                    <ul>
                        <li>
                            <h3>How to start Bot?</h3>
                            <p>
                                Hit "Create bot", fill the form and wait about 5 minutes.
                                After it you will be able to manage you bot.
                            </p>
                        </li>
                        <li>
                            <h3>How many bots can I have?</h3>
                            <p>Now we do not limit the number of bots.</p>
                        </li>
                        {
                            /*
                        <li>
                            <h3>Why is the bot free?</h3>
                            <p>Bot is a new project. We are testing new features and fixing bugs found.</p>
                            <p>We are interested in a large number of people starting to use our product.</p>
                            <p>We do not plan to introduce payment for using the bot yet. But at the same time, we pay
                                server rent and developers' salaries.</p>
                            <p>If you are ready to help financially, please write to <a
                                href="mailto:traviboost@web2ua.com"><b>traviboost@web2ua.com</b></a></p>
                        </li>

                             */
                        }

                        <li>
                            <h3>What can a bot do?</h3>
                            <p>The "Fast Second Village" strategy is now available.</p>
                            <p>Add a new account and the bot will build a second village automatically.</p>
                        </li>

                        <li>
                            <h3>Will new features be added?</h3>
                            <p>Strategies for dealing with a large number of villages are coming soon.</p>
                        </li>
                        {/*
                            <
                            }!--p>Every interval (about 1200 secundes)  bot can:
                        <ul>
                        <li>order troops if you need it</li>
                        <li>relocate resources between villages</li>
                        <li>build resources fields and buildings</li>
                        <li>send Gold club farm lists</li>
                        </ul>
                        </p>
                        </li-->
                        */
                        }
                        <li>
                            <h3>How does the bot align resources?</h3>
                            <p>The bot determines the type of resource with the minimum amount. Then it will try to build resource fields for this resource.</p>
                            <p>For example, if the account has the least amount of clay, then the bot will build clay fields in those villages where possible.</p>
                            <p>After that, the bot in the market will try to distribute resources equally in all villages.</p>
                        </li>
                        <li>
                            <h3>How does the bot build buildings?</h3>
                            <p>The construction queue tab shows the existing buildings in each village.</p>
                            <p>For each building, you can select the desired level to which the building should be built.</p>
                            <p>Select the desired level and click save.</p>
                        </li>
                        <li>
                            <h3>How does the bot send farm?</h3>
                            <p>Bot send farm via Gold club farm lists.</p>
                            <p>Bot detects existing lists and you select the necessary</p>
                        </li>
                        <li>
                            <h3>Nothing works for me. What to do?</h3>
                            <p>We are trying to fix bugs related to changes in the game and add new features to the bot.</p>
                            <p>If you spot a bug, please let us know: <a href="https://discord.gg/vX4uxzTKTA"><b>Traviboost Discord</b></a>,.
                                <a href="mailto:traviboost@web2ua.com"><b>traviboost@web2ua.com</b></a></p>
                        </li>
                        <li>
                            <h3>How can I help the project?</h3>
                            <p>You can tell us which features you are missing the most and we will try to add them.</p>
                            <p>Subscribe to our social networks. Tell your alliance about our bot.</p>
                        </li>
                    </ul>
                    {
                        /*
                    <!--div class="badges">
                      <a class="badge-link" href="#"><img src="img/google-play-badge.svg" alt=""></a>
                      <a class="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""></a>
                    </div-->

                         */
                    }
            <Footer/>
        </div>

                        );
};

export default Faq;
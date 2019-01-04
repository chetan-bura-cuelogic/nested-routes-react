import React, { Component } from 'react'
import {
  Link,
  Switch,
  Route // for later
} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Home from './Home'
import Topics from './Topics'

class App extends Component {
  render() {
    return (
      <div style={{width: 1000, margin: '0 auto'}}>
        <Helmet>
        <title>Home</title>
          <meta name="description" content="Regulation Crowdfunding portal in the US." />
          <link rel="canonical" href="https://chetan-bura-cuelogic.github.io/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${Date()}Local Businesses through Debt Crowdfunding`} />
          <meta property="og:description" content="Regulation Crowdfunding portal in the US." />
          <meta property="og:url" content="https://chetan-bura-cuelogic.github.io/" />
          <meta property="og:site_name" content="NextSeed" />
          <meta property="og:image" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
          <meta property="og:image:secure_url" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
          <meta property="og:image:width" content="1600" />
          <meta property="og:image:height" content="1067" />
        </Helmet>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>

        <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/topics' component={Topics} />
      </Switch>
    </div>
    )
  }
}
export default App;
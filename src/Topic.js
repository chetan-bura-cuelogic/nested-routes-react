import React, { Component } from 'react'
import {
    Link,
    Route // for later
  } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Resource from './Resource'
const all_topics = [
    {
      name: 'React Router',
      id: 'react-router',
      description: 'Declarative, component based routing for React',
      resources: [
        {
          name: 'URL Parameters',
          id: 'url-parameters',
          description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
          url: 'https://tylermcginnis.com/react-router-url-parameters/'
        },
        {
          name: 'Programatically navigate',
          id: 'programmatically-navigate',
          description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
          url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
        }
      ]
    },
    {
      name: 'React.js',
      id: 'reactjs',
      description: 'A JavaScript library for building user interfaces',
      resources: [
        {
          name: 'React Lifecycle Events',
          id: 'react-lifecycle',
          description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
          url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
        },
        {
          name: 'React AHA Moments',
          id: 'react-aha',
          description: "A collection of 'Aha' moments while learning React.",
          url: 'https://tylermcginnis.com/react-aha-moments/'
        }
      ]
    },
    {
      name: 'Functional Programming',
      id: 'functional-programming',
      description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
      resources: [
        {
          name: 'Imperative vs Declarative programming',
          id: 'imperative-declarative',
          description: 'A guide to understanding the difference between Imperative and Declarative programming.',
          url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
        },
        {
          name: 'Building User Interfaces with Pure Functions and Function Composition',
          id: 'fn-composition',
          description: 'A guide to building UI with pure functions and function composition in React',
          url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
        }
      ]
    }
  ]
class Topic extends Component {

 render() {
  const topic = all_topics.find(({ id }) => id === this.props.match.params.topicId)

    return (
        <div>
          <Helmet>
            <title>Topics</title>
            <meta charSet="utf-8" />
            <meta name="description" content="New Topic description." />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={topic.name} />
            <meta property="og:description" content={topic.description} />
            <meta property="og:url" content="https://chetan-bura-cuelogic.github.io/" />
            <meta property="og:site_name" content={topic.description} />
            <meta property="og:image" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
            <meta property="og:image:secure_url" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
            <meta property="og:image:width" content="1600" />
            <meta property="og:image:height" content="1067" />
          </Helmet>
          <h2>{topic.name}</h2>
          <p>{topic.description}</p>
    
          <ul>
            {topic.resources.map((sub) => (
              <li key={sub.id}>
                <Link to={`${this.props.match.url}/${sub.id}`}>{sub.name}</Link>
              </li>
            ))}
          </ul>
    
          <hr />
    
          <Route path={`${this.props.match.path}/:subId`} component={Resource} />
        </div>
      )
  }
}

export default Topic;
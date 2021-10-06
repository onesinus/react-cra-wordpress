import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Layout from "./Layout";
const axios = require('axios');

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Layout exact path="/" component={Home} header={true} />
          <Layout path="/about" component={About} header={true} />
          <Layout exact path="/blog" component={Blog} />
          <Layout path="/blog/:id" component={BlogDetail} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Blog() {
  const [html, setHtml] = useState('')
  useEffect(() => {
    const url = 'https://i0q58ijocj.execute-api.ap-southeast-1.amazonaws.com/onempm/wp-request'
    // const url = 'https://localhost:3001'
    const data = {
      url: 'https://wp.otodeals.com'
    }

    axios.post(url, data).then(response => setHtml(response.data));
  }, [])
  return (
    <div
      dangerouslySetInnerHTML={{__html: html}}
    ></div>
  )
}

function BlogDetail(props) {
  const { pathname } = props.location

  const [html, setHtml] = useState('')
  useEffect(() => {
    const url = 'https://i0q58ijocj.execute-api.ap-southeast-1.amazonaws.com/onempm/wp-request'
    const data = {
      url: pathname.replace("/blog", "wp.otodeals.com")
    }

    axios.post(url, data).then(response => setHtml(response.data));
  }, [pathname])

  return (
    <div
      dangerouslySetInnerHTML={{__html: html}}
    ></div>
  )
}

export default App;

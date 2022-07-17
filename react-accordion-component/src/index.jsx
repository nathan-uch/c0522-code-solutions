import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  { title: 'JavaScript', text: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.' },
  { title: 'HTML', text: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
  { title: 'CSS', text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' }
];

const allTopics = <Accordion topics={topics} />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(allTopics);

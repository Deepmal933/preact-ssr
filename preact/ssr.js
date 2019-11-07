import { h } from 'preact';
import render from 'preact-render-to-string';

import App from './components/app'
import container from './container'


module.exports = ()=>{
    const html = render(<App/>);
    return {html:html}
};
'use strict'
class H1Sample extends HTMLElement {
    connectedCallback() {
        let template = document.createElement('template')
        template.innerHTML = `
        <style>
            :host {
                display: block;
                position: relative;
                box-sizing: border-box;  
            }

            h1 {
                color: maroon !important;
                border-left: 3px solid maroon !important;
                padding: 8px 16px !important;
                font-family:'Roboto' !important;
                font-weight: 300 !important;
                font-size: 32px !important;
                margin:0 !important;
            }
        </style>
        <h1 class="cleanslate"><slot></slot></h1>
        `
        ShadyCSS.prepareTemplate(template, 'h1-sample')
        ShadyCSS.styleElement(this)
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(document.importNode(template.content, true))
    }
}

customElements.define('h1-sample', H1Sample)

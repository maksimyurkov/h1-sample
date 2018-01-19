'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H1Sample = function (_HTMLElement) {
    _inherits(H1Sample, _HTMLElement);

    function H1Sample() {
        _classCallCheck(this, H1Sample);

        return _possibleConstructorReturn(this, (H1Sample.__proto__ || Object.getPrototypeOf(H1Sample)).apply(this, arguments));
    }

    _createClass(H1Sample, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            var template = document.createElement('template');
            template.innerHTML = '\n        <style>\n            :host {\n                display: block;\n                position: relative;\n                box-sizing: border-box;  \n            }\n\n            h1 {\n                color: maroon !important;\n                border-left: 3px solid maroon !important;\n                padding: 8px 16px !important;\n                font-family:\'Roboto\' !important;\n                font-weight: 300 !important;\n                font-size: 32px !important;\n                margin:0 !important;\n            }\n        </style>\n        <h1 class="cleanslate"><slot></slot></h1>\n        ';
            ShadyCSS.prepareTemplate(template, 'h1-sample');
            ShadyCSS.styleElement(this);
            this.attachShadow({
                mode: 'open'
            });
            this.shadowRoot.appendChild(document.importNode(template.content, true));
        }
    }]);

    return H1Sample;
}(HTMLElement);

customElements.define('h1-sample', H1Sample);

// styles/global.js
import css from 'styled-jsx/css'

export default css.global`
    .search-box {
        max-width: 1230px;
    }

    .search-button {
        width: 45%;
        border-radius: 0 80px 80px 0;
        overflow: hidden;
    }
    
    .summary {
        font-size: 14px;
        color: #4a4a4a;
        font-weight: 500;
    }

    .summary-contact {
        color: #ef5729;
        text-decoration: underline;
    }

    .filter-overlay {
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, .85);
        width: 100%;
        height: 100%;
        z-index: 3;
        transition: ease-in .2s all;
    }
`
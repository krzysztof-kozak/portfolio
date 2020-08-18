import '../scss/main.scss';
console.log('%c Why hello there, fellow dev :) ', 'background: #222; color: #bada55');

const API = 'https://api.github.com/users/krzysztof-kozak/repos'
const acceptedRepos = ['portfolio', 'hydrapp', 'fantasy-realms', 'reddit-browser']

fetch(API)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (acceptedRepos.includes(element.name)) {

                const { name, description, html_url, homepage } = element

                let container = document.querySelector('.grid-container--js');
                const template = `<article class="project">
                <div class="console-bar">
                  <span class="console-dot"></span>
                  <span class="console-dot"></span>
                  <span class="console-dot"></span>
                </div>

                <div class="project-wrapper">
                  <img src="img/github-icon.svg" alt="Github logo" />
                  <h3 class="project__header grid">
                    <span class="label">project:</span
                    ><span class="title">${name}</span>
                  </h3>
                  <p class="grid">
                    <span class="label">description:</span
                    ><span class="description"
                      >${description}</span
                    >
                  </p>
                  <p class="grid">
                    <span class="label">demo:</span>
                    <span>
                      &lt;<a class="project__link" href="${homepage}" title="name - demo"
                        >see here</a
                      >&gt;
                    </span>
                  </p>
                  <p class="grid">
                    <span class="label">github:</span>
                    <span>
                      &lt;<a
                        class="project__link"
                        href="${html_url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="github - sourcecode"
                        >source code</a
                      >&gt;
                    </span>
                  </p>
                </div>
              </article>`

                container.innerHTML += template;
            } else return
        });
    })
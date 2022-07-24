const React = require('react')
const Def = require('./default')

function home () {
        return (
          <Def>
              <main>
                  <h1>HOME</h1>
                  <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                    <div>
                    Photo by <a href="https://unsplash.com/@vdphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">VD Photography</a> on <a href="https://unsplash.com/s/photos/chia-fruit-shake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                  </div>
                  <a href="/places">
                    <button className="btn-primary">Places Page</button>
                  </a>

              </main>
          </Def>
        )
}

module.exports = home
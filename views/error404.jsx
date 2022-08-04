/*Globals*/
const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img src="/images/oops-girl.jpg" alt="Girl that is very sorry she can't find your page" />
        <div>Photo by <a href="https://unsplash.com/@ilumire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jelleke Vanooteghem</a> on <a href="https://unsplash.com/s/photos/oops?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404
import _ from 'lodash'

const app = () => {
  const element = document.createElement('div')

  //element.innerHTML = _.join(['Hello App', 'webpack'], ' ')
  element.innerHTML = 'teste'
  return element
}

document.body.appendChild(app())

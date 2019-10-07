module.exports = {
  CreateElement: function ({ el, id = null, content = null, classes = [], attr = {}, appendTo = null, insertBefore = {} }) {
    let element = document.createElement(el)

    if (id !== null) {
      element.id = id
    }

    if (classes.length) {
      for (let c of classes) {
        element.classList.add(c)
      }
    }

    if (Object.keys(attr).length > 0) {
      for (let key in attr) {
        element.setAttribute(key, attr[key])
      }
    }

    if (content !== null) {
      element.textContent = content
    }

    if (appendTo !== null) {
      return appendTo.appendChild(element)
    }

    if (Object.keys(insertBefore).length > 0) {
      const {
        parent = null,
        before = null
      } = insertBefore

      return parent.insertBefore(element, before)
    }

    return element
  },
  Lang: function () {
    const data = document.documentElement.getAttribute('lang').split('-')
    return data[0]
  }
}

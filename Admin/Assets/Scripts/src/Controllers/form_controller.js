import { LocalizedController } from './Base/localized_controller'
import { CreateElement } from '../Helpers'

export default class extends LocalizedController {
  static targets = ['password', 'passwordField']

  get locales () {
    return {
      'en': {
        'showPassword': 'Show'
      },
      'fr': {
        'showPassword': 'Afficher'
      }
    }
  }

  initialize () {
    if (this.hasPasswordTarget) {
      this.createPasswordRevealButton()
    }
  }

  fieldHasError () {
    return this.passwordTarget.classList.contains('has-error')
  }

  createPasswordRevealButton () {
    // Form element must have this class to display a smaller field
    this.passwordTarget.classList.add('js-Form-element--password')

    // Create the show button and append it to the password target
    CreateElement({
      el: 'button',
      content: this.i18n('showPassword'),
      attr: {
        'type': 'button',
        'aria-pressed': false,
        'data-action': `click->${this.identifier}#revealPassword`
      },
      // If field has error, we insert it before the form error zone. Otherwise we append it to the form element
      appendTo: !this.fieldHasError() ? this.passwordTarget : null,
      insertBefore: this.fieldHasError()
        ? {
          parent: this.passwordTarget,
          before: this.passwordTarget.querySelector('.Form-error')
        } : {}
    })
  }

  revealPassword (e) {
    if (!this.hasPasswordFieldTarget) {
      throw new Error('Missing passwordField target in form_controller')
    }

    let pressed = e.target.getAttribute('aria-pressed') === 'true'
    e.target.setAttribute('aria-pressed', !pressed);

    switch (this.passwordFieldTarget.type) {
      case 'password':
        this.passwordFieldTarget.type = 'text'
        break
      case 'text':
        this.passwordFieldTarget.type = 'password'
        break
    }
  }
}

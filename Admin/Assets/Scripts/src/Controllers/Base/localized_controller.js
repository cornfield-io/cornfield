import { Controller } from 'stimulus'
import { Lang } from '../../Helpers'

export class LocalizedController extends Controller {
  get lang () {
    return Lang()
  }

  get locales () {
    return {}
  }

  i18n (key) {
    if (!Object.keys(this.locales).includes(this.lang)) {
      throw new Error(`Unsupported lang '${this.lang}' from localized_controller.i18n() method`)
    }
    return this.locales[this.lang][key]
  }
}

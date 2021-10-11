/**
 * Filters available for use in Nunjucks templates
 */
export default (env) => {
  const filters = {}

  /**
   * Covert date to human readable value
   *
   * @example 2021-10-11 => 11 October 2021
   *
   * @param {String} string Date
   * @return {String} Human readbable date
   */
  filters.govukDate = (s) => {
    return new Date(s).toLocaleDateString('en-GB', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  /**
   * Logs an object in the template to the console in the browser.
   *
   * @example {{ "hello world" | log }}
   *
   * @param {any} a Any type
   * @return {String} A script tag with a `console.log` call.
   */
  filters.log = (a) => {
    const nunjucksSafe = env.getFilter('safe')
    return nunjucksSafe(`<script>console.log(${JSON.stringify(a, null, '\t')});</script>`)
  }

  return filters
}

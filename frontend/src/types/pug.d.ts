declare module '*.pug' {
  const locals: object;
  function template(locals?): string;
  export default template;
}

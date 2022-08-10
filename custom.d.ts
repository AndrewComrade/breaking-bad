declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}

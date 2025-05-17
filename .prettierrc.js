module.exports = {
  // 强制使用单引号
  singleQuote: true,
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 末尾不需要逗号
  trailingComma: 'none',
  // 行尾不需要有分号
  semi: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 crlf/lf/auto
  endOfLine: 'auto',
  // JSX 标签的右括号是否与前一行的末尾对齐，默认为 false
  jsxBracketSameLine: false,
  // 是否需要在文件顶部添加特殊的注释才能进行格式化，默认为 false
  requirePragma: false,
  // 是否在格式化后的文件顶部插入特殊的注释，默认为 false
  insertPragma: false,
  // 是否保留 markdown 文件中的换行符，默认为 "preserve"
  proseWrap: 'preserve',
  // 指定 HTML 文件中空格敏感度的配置选项，可以是 "css" 或 "strict" 两个选项
  htmlWhitespaceSensitivity: 'css',
  // 是否缩进 Vue 文件中的 <script> 和 <style> 标签，默认为 false
  vueIndentScriptAndStyle: false,
  // 指定换行符的风格，可以是 "auto"、"lf"、"crlf"、"cr" 四个选项
  endOfLine: 'auto',
  // 是否使用项目根目录下的 .prettierrc 文件，默认为 true
  usePrettierrc: true,
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 4 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 针对特定文件或文件类型的格式化配置
  overrides: [
    {
      files: '*.json', // 匹配的文件或文件类型
      options: {
        tabWidth: 4 // 针对该文件类型的配置选项
      }
    },
    {
      files: '*.md',
      options: {
        printWidth: 100
      }
    }
  ]
}

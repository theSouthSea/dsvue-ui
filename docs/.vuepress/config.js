import { defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = getDirname(import.meta.url)
// module.exports = {
export default {
  title: 'Mooc-UI',
  description: 'Just playing around',
  base: "/moocUI/",
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Zack921/moocUI' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
    ],
    sidebar: ['/', '/componentDocs/card']
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}
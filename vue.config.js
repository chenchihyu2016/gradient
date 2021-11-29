const { VuetifyLoaderPlugin } = require('vuetify-loader');

module.exports = {
    test: true,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin({
                match (originalTag, { kebabTag, camelTag }) {
                    if (kebabTag.startsWith('c-')) {
                        return [camelTag, `import ${camelTag} from '@/components/${camelTag}.vue'`];
                    }
                }
            })
        ]
    },
    transpileDependencies: ['vuetify'],
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/assets/scss/variables";`
            }
        }
    }
}
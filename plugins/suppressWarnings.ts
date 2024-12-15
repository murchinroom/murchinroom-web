const mathElements = [
    // MathJax:
    'G', 'Use', 'Defs', 'Rect', 'MjxContainer', 'Path',
    // KaTeX:
    'Math', 'Maction', 'Annotation', 'Annotation-xml', 'Menclose', 'Merror', 'Mfenced', 'Mfrac', 'Mi', 'Mmultiscripts', 'Mn', 'Mo', 'Mover', 'Mpadded', 'Mphantom', 'Mprescripts', 'Mroot', 'Mrow', 'Ms', 'Semantics', 'Mspace', 'Msqrt', 'Mstyle', 'Msub', 'Msup', 'Msubsup', 'Mtable', 'Mtd', 'Mtext', 'Mtr', 'Munder', 'Munderover',
]

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.warnHandler = (msg: string, instance: ComponentPublicInstance | null, trace: string) => {
        // WARN  Failed to resolve component: Mo
        // https://github.com/nuxt/content/issues/1774
        if (msg.startsWith('Failed to resolve component')) {
            try {
                const firstLine = msg.slice(0, msg.indexOf("\n"))
                const component = firstLine.split(":", 2)[1].trim()
                if (mathElements.includes(component)) {
                    return;
                }
            } catch {
                /* continue; */
            }
        }

        // WARN .png files are not supported, "blogs:blogs:test:test.png" falling back to raw content
        if (msg.includes("files are not supported") && msg.includes("blogs") && msg.includes("falling back to raw content")) {
            return;
        }

        console.warn(msg, trace);
    }
})
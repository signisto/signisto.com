import Document, { Head, Main, NextScript, DocumentContext } from 'next/document'

const { NODE_ENV } = process.env
const GOOGLE_ANALYTICS_ID = 'UA-66480539-1'

interface Props {
  isProduction: boolean
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const isProduction = NODE_ENV === 'production'
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      isProduction,
    }
  }

  googleAnalyticsScript() {
    return `
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', '${GOOGLE_ANALYTICS_ID}', 'auto');
      ga('send', 'pageview');
    `.trim()
  }

  render() {
    const { isProduction } = this.props

    return (
      <html>
        <Head/>
        <body className="h-screen">
          <Main/>
          <NextScript/>

          {isProduction && <script dangerouslySetInnerHTML={{ __html: this.googleAnalyticsScript() }}></script>}
        </body>
      </html>
    )
  }
}


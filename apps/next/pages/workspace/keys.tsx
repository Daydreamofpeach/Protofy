import KeysPage from 'protolib/bundles/keys/adminPages'
import Head from 'next/head'
import { useRedirectToEnviron } from 'protolib/lib/useRedirectToEnviron'
import { SiteConfig } from 'app/conf'

export default function Page(props:any) {
  useRedirectToEnviron()
  const projectName = SiteConfig.projectName

  return (
    <>
      <Head>
        <title>{projectName + " - Keys"}</title>
      </Head>
      <KeysPage.keys.component {...props} />
    </>
  )
}

export const getServerSideProps = KeysPage.keys.getServerSideProps
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { PageProps } from '.'
import { useContactForm } from '../hooks/useContactForm'
import { getSiteConfig } from '../utils/api'

export type ContactPageProps = PageProps

function temporaryFormFunction() {
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify("This is ")
  }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
    }
  })
}

export default function ContactPage(): JSX.Element {
  const form = useContactForm(temporaryFormFunction)

  return (
    <form onSubmit={form.callback} className='container mx-auto px-6 grid gap-4 max-w-lg'>
      <h1 className='text-center text-4xl text-gray-600'>Send us a message</h1>
      <p>
        <label htmlFor="name" className='uppercase text-gray-600 text-md font-bold'>Name</label>
        <input value={form.name} onChange={form.setName} required type="text" id="name" className='w-full bg-gray-200 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' />
      </p>
      <p>
        <label htmlFor="email" className='uppercase text-gray-600 text-md font-bold'>Email</label>
        <input value={form.email} onChange={form.setEmail} required type="email" id="email" className='w-full bg-gray-200 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' />
      </p>
      <p>
        <label htmlFor="message" className='uppercase text-gray-600 text-md font-bold'>Message</label>
        <textarea required value={form.message} onChange={form.setMessage} id="message" className='w-full h-32 bg-gray-200 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline' />
      </p>
      <button type="submit" className='uppercase text-md font-bold tracking-wide bg-gray-600 text-gray-100 p-3 rounded-lg w-28 justify-self-end focus:outline-none focus:shadow-outline'>Send</button>
    </form>
  )
}

export async function getStaticProps({ preview = false }: GetStaticPropsContext): Promise<GetStaticPropsResult<ContactPageProps>> {
  const siteConfig = await getSiteConfig(preview)

  return {
    props: {
      siteConfig,
    },
  }
}

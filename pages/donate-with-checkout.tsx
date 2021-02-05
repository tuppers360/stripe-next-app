import { NextPage } from 'next'
import Layout from '../components/Layout'

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Pay with Checkout | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Pay with Checkout</h1>
        <p>Pay to our project 💖</p>
        <CheckoutForm />
      </div>
    </Layout>
  )
}

export default DonatePage

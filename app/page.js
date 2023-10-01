import Image from 'next/image';
import Link from 'next/link';
import matchapowder from '../public/images/matchapowder.jpg';

export default function Home() {
  return (
    <main className="mainPage">
      <h1>MATCHA</h1>
      <Image src={matchapowder} alt="matcha powder" className="imageMainPage" />
      <section className="generalInfo">
        <p>General information</p>
      </section>
      <section className="productsLink">
        {' '}
        <Link href="/products">Products</Link>
      </section>
      <br />
      <section className="signUp">
        <div>Sign up input field</div>
      </section>
    </main>
  );
}

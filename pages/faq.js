
import Head from 'next/head';
import Link from '../src/components/Link';

// export async function getServerSideProps(){
    //console.log('roda a cada acesso que você recebe')
// }

export async function getStaticProps(){
    // getStaticProps console.log('roda somente em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
       const faq = await fetch(FAQ_API_URL)
            .then((res)=> {
                return res.json();
            })
            .then((response) => {
               return response
            })
    return{
        props: {
            qualquercoisa: 'Aqui',
            faq,
        },
    }
}

export default function FAQPage({faq}) {
    
    // const [faq, setFaq] = useState ([])
    // useEffect(() => {
        
    // },[])
    return (
        <div>
            <Head>
                <title>Faq - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({answer, question}) =>
                <li key={question}>
                    <article>
                        <h2>
                            {question}
                        </h2>
                        <p>
                            {answer}
                        </p>
                    </article>
                </li>
                )}
            </ul>
        </div>
    )
}